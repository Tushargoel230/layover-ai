"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import InfluencerTrips from "@/components/landing/InfluencerTrips";
import { destinations } from "@/lib/data";

// ── Floating polaroid photos in hero ──────────────────────────────
const polaroids = [
  { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop", label: "Swiss Alps", rot: -8, top: "8%", left: "2%" },
  { img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&auto=format&fit=crop", label: "Glenfinnan", rot: 6, top: "5%", right: "2%" },
  { img: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&auto=format&fit=crop", label: "Pyramids", rot: -5, bottom: "18%", left: "1%" },
  { img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&auto=format&fit=crop", label: "Taj Mahal", rot: 7, bottom: "15%", right: "1%" },
];

// ── Travel type cards ─────────────────────────────────────────────
const travelTypes = [
  { label: "Ocean Lover", img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format&fit=crop", scale: 0.92 },
  { label: "Nature Lover", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop", scale: 1.08 },
  { label: "Peace Lover", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop", scale: 0.92 },
];

// ── Problem apps ──────────────────────────────────────────────────
const problemApps = [
  { name: "Skyscanner", does: "Finds flights", missing: "itinerary, budget, expenses" },
  { name: "Booking.com", does: "Books hotels", missing: "planning, splitting, events" },
  { name: "Wanderlog", does: "Builds itineraries", missing: "AI budget, payments, outfits" },
  { name: "Splitwise", does: "Splits bills", missing: "travel context, booking, planning" },
  { name: "Songkick", does: "Finds concerts", missing: "trip integration, budget awareness" },
  { name: "Pinterest", does: "Outfit ideas", missing: "your wardrobe, destination context" },
];

const featureBlocks = [
  {
    emoji: "🧠", tag: "AI Budget Oracle", headline: "Tell us your budget. We plan everything.",
    bullets: ["Auto-allocates across categories", "Real-time budget tracking", "Alerts before overspend", "Adapts when you book"],
    mock: (
      <div>
        <div className="flex justify-between text-sm mb-2"><span className="text-muted">Budget Used</span><span className="font-bold">88%</span></div>
        <div className="h-2 bg-border rounded-full overflow-hidden"><div className="h-full w-[88%] bg-gradient-to-r from-sunset to-coral" /></div>
        <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
          {["✈️ Flights $600","🏨 Hotels $560","🍝 Food $400","🎟️ Activities $200"].map(i=><div key={i} className="p-2 bg-bg border border-border rounded-lg">{i}</div>)}
        </div>
      </div>
    ),
  },
  {
    emoji: "🎫", tag: "Events & Concerts", headline: "Never miss Coldplay in Rome again.",
    bullets: ["Ticketmaster & Songkick integration", "Surfaces events during exact trip dates", "One tap to add to itinerary", "Group voting on events"],
    mock: (
      <div className="space-y-3 text-sm">
        {[{e:"🎵",n:"Coldplay World Tour",d:"June 15",p:"€85"},{e:"🎷",n:"Jazz Festival",d:"June 16–19",p:"€20"}].map(r=>(
          <div key={r.n} className="flex items-center gap-3 p-3 bg-bg border border-border rounded-xl">
            <span className="text-2xl">{r.e}</span><div className="flex-1"><div className="font-bold">{r.n}</div><div className="text-muted text-xs">{r.d}</div></div><div className="text-coral font-bold">{r.p}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    emoji: "👗", tag: "Outfit Planner", headline: "Dressed for every day of the trip.",
    bullets: ["Scans your wardrobe", "Plans outfits per activity and weather", "Spots missing items", "Shops the gap with affiliate links"],
    mock: (
      <div className="grid grid-cols-3 gap-2 text-xs">
        {["👕","👔","🩳","👙","👗","🧥"].map((e,i)=>(
          <div key={i} className="p-3 bg-bg border border-border rounded-lg text-center"><div className="text-2xl mb-1">{e}</div><div className="text-muted">Day {i+1}</div></div>
        ))}
      </div>
    ),
  },
  {
    emoji: "📸", tag: "Trip Feed", headline: "Post photos. Make friends jealous.",
    bullets: ["Private group photo feed", "Live trip reactions", "Friends watch your location dot", "Shareable trip recap card"],
    mock: (
      <div className="grid grid-cols-3 gap-2">
        {["🏛️","🍝","🌇","☕","🎨","🌙"].map((e,i)=>(
          <div key={i} className="aspect-square bg-bg border border-border rounded-lg flex items-center justify-center text-3xl">{e}</div>
        ))}
      </div>
    ),
  },
  {
    emoji: "💸", tag: "Split Payments", headline: "One wallet. Zero awkward convos.",
    bullets: ["Shared group wallet", "Smart per-person splits", "Instant international settlement", "Receipt scan with AI"],
    mock: (
      <div className="space-y-2 text-sm">
        {[{l:"Hotel",a:560,pp:280},{l:"Flights",a:600,pp:300},{l:"Dinner",a:120,pp:60}].map(r=>(
          <div key={r.l} className="flex justify-between p-3 bg-bg border border-border rounded-xl"><span>{r.l}</span><span className="text-coral font-bold">${r.a} · ${r.pp}/pp</span></div>
        ))}
      </div>
    ),
  },
  {
    emoji: "🏆", tag: "Achievements", headline: "Travel more. Earn more.",
    bullets: ["15 unique explorer badges", "LVR points redeemable for discounts", "Friends leaderboard", "Shareable profile card"],
    mock: (
      <div className="grid grid-cols-3 gap-3 text-center text-xs">
        {["💰","🎉","🇪🇺","🌙","🍝","👥"].map((e,i)=>(
          <div key={i} className="p-3 bg-bg border border-border rounded-lg"><div className="text-2xl mb-1">{e}</div></div>
        ))}
      </div>
    ),
  },
];

const testimonials = [
  { name: "Maya K.", role: "Solo traveler", quote: "I planned 3 weeks across Southeast Asia in under an hour. The budget oracle saved me $400." },
  { name: "The Chen Squad", role: "Friend group (6)", quote: "No more Splitwise chaos. One wallet, one itinerary, zero arguments." },
  { name: "Leo & Amara", role: "Couple", quote: "We finally went to Coldplay in Rome because Layover found it while we were planning." },
];

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [annual, setAnnual] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/demo");
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — full screen aerial ocean background
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Background ocean photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop"
            alt="Aerial ocean"
            className="w-full h-full object-cover"
          />
          {/* Dark teal overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,60,65,0.45) 0%, rgba(8,60,65,0.25) 50%, rgba(8,60,65,0.55) 100%)" }} />
        </div>

        {/* Floating polaroid cards */}
        {polaroids.map((p, i) => (
          <motion.div
            key={p.label}
            className="polaroid absolute hidden md:block"
            style={{ width: 200, top: p.top, left: p.left, right: (p as any).right, bottom: (p as any).bottom, rotate: p.rot, zIndex: 5 }}
            initial={{ opacity: 0, scale: 0.8, rotate: p.rot - 5 }}
            animate={{ opacity: 1, scale: 1, rotate: p.rot }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.7, type: "spring" }}
            whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
          >
            <img src={p.img} alt={p.label} className="w-full h-32 object-cover rounded-sm" />
          </motion.div>
        ))}

        {/* Centre content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-3xl">
          {/* Script logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-6 select-none"
            style={{ fontFamily: "var(--font-dancing)", fontSize: "clamp(3.5rem, 8vw, 6.5rem)", lineHeight: 1, textShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
          >
            Layover
          </motion.div>

          {/* Search bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSearch}
            className="w-full mb-6"
          >
            <input
              className="hero-search"
              placeholder="tell me about your vacation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motion.form>

          {/* Sub label + book button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col items-center gap-3">
            <span className="text-sm font-semibold" style={{ color: "#A78BFA" }}>
              Primary Travel but...
            </span>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push("/demo")}
              className="flex items-center gap-2 bg-white text-text font-bold rounded-full px-7 py-3 shadow-xl hover:shadow-2xl transition-shadow"
            >
              Book a trip
              <span className="w-8 h-8 bg-text text-white rounded-full flex items-center justify-center text-sm">↗</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-6 left-0 right-0 flex flex-wrap justify-center gap-6 px-4 z-10 text-white/90 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">⭐</span>
            <span>4.9 stars (541k Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">👥</span>
            <span>50k travellers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">📸</span>
            <span>1+ million followers</span>
          </div>
        </motion.div>

        {/* Get for Free pill bottom-right */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => router.push("/demo")}
          className="absolute bottom-5 right-5 z-10 bg-white rounded-2xl px-4 py-3 flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <span className="w-8 h-8 rounded-xl flex items-center justify-center text-sm bg-gradient-to-br from-sunset to-coral text-white">✈</span>
          <span className="text-text font-semibold text-sm">Get for Free</span>
        </motion.button>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRAVEL TYPE QUIZ
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-center mb-12 text-text"
          >
            What kind of traveler are you?
          </motion.h2>
          <div className="flex items-end justify-center gap-4 md:gap-6">
            {travelTypes.map((t, i) => {
              const isCenter = i === 1;
              const isSelected = selectedType === t.label;
              return (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: isCenter ? -12 : -8, scale: 1.03 }}
                  onClick={() => setSelectedType(isSelected ? null : t.label)}
                  className="cursor-pointer flex flex-col items-center gap-3"
                  style={{ width: isCenter ? "36%" : "32%", maxWidth: isCenter ? 320 : 280 }}
                >
                  <div
                    className="w-full overflow-hidden"
                    style={{
                      borderRadius: 20,
                      height: isCenter ? 420 : 340,
                      border: isSelected ? "3px solid #FF6B6B" : "3px solid transparent",
                      boxShadow: isSelected ? "0 0 0 6px rgba(255,107,107,0.2)" : "0 12px 40px -8px rgba(0,0,0,0.2)",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  >
                    <img src={t.img} alt={t.label} className="w-full h-full object-cover" />
                  </div>
                  <div
                    className="font-bold text-lg font-spaceGrotesk"
                    style={{ color: "#094A4D" }}
                  >
                    {t.label}
                    {isSelected && <span className="text-coral ml-2">✓</span>}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="mt-8 text-center"
              >
                <p className="text-muted mb-4">Great choice! We'll tailor your trips for <strong className="text-text">{selectedType}</strong> experiences.</p>
                <button
                  onClick={() => router.push("/demo")}
                  className="bg-coral text-white font-bold rounded-full px-8 py-3 hover:bg-sunset transition-colors shadow-lg"
                >
                  Plan my {selectedType} trip ✈️
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INFLUENCER TRIPS
      ══════════════════════════════════════════════════════ */}
      <InfluencerTrips />

      {/* ══════════════════════════════════════════════════════
          POPULAR DESTINATIONS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-spaceGrotesk text-text">
              Where do you want to <span className="gradient-text">wake up tomorrow?</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((d, i) => (
              <motion.div
                key={d.city}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer h-60"
                style={{ boxShadow: "0 8px 32px -8px rgba(10,112,117,0.25)" }}
              >
                <img src={d.img} alt={d.city} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-xl font-bold font-spaceGrotesk">{d.emoji} {d.city}</div>
                  <div className="text-white/80 text-sm">{d.country}</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-text">
                  {d.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROBLEM
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-spaceGrotesk text-center mb-12">
            You're using <span className="gradient-text">6 apps</span> for one trip.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problemApps.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="p-6">
                  <div className="text-xl font-bold font-spaceGrotesk">{a.name}</div>
                  <div className="text-muted mt-2 text-sm">{a.does}.</div>
                  <div className="mt-4 text-sm text-red flex items-center gap-2"><span>⚠️</span>Missing: {a.missing}</div>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-spaceGrotesk text-center mt-14">
            <span className="gradient-text">Layover.ai replaces all of them.</span>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {featureBlocks.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div key={f.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-10 items-center mb-24 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div><Card className="p-6">{f.mock}</Card></div>
                <div>
                  <div className="text-6xl mb-4">{f.emoji}</div>
                  <div className="inline-block text-xs tracking-widest uppercase text-coral border border-coral/40 bg-coral/5 rounded-full px-3 py-1 mb-3">{f.tag}</div>
                  <h3 className="text-3xl md:text-4xl font-bold font-spaceGrotesk mb-5">{f.headline}</h3>
                  <ul className="space-y-2">{f.bullets.map(b=><li key={b} className="flex items-start gap-2 text-muted"><span className="text-palm mt-1">✓</span>{b}</li>)}</ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SOCIAL PROOF
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 border-y border-border" style={{ background: "linear-gradient(135deg, rgba(10,112,117,0.06), rgba(255,140,66,0.06))" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[{v:"4.2B",l:"Trips planned"},{v:"$340M",l:"Saved on budget"},{v:"98",l:"Countries covered"},{v:"2.1M",l:"Travelers"}].map(s=>(
              <div key={s.l} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text font-spaceGrotesk">{s.v}</div>
                <div className="text-sm text-muted mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(t=>(
              <Card key={t.name} className="p-6">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-base text-text">"{t.quote}"</div>
                <div className="mt-4 text-sm"><div className="font-bold">{t.name}</div><div className="text-muted">{t.role}</div></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRICING TEASER
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-spaceGrotesk mb-4">Simple <span className="gradient-text">pricing</span></h2>
          <p className="text-muted mb-8">Start free. Upgrade when you're hooked.</p>
          <div className="inline-flex bg-white border border-border rounded-full p-1 mb-10 shadow-sm">
            <button onClick={()=>setAnnual(false)} className={`px-4 py-2 rounded-full text-sm transition ${!annual?"bg-coral text-white":"text-muted"}`}>Monthly</button>
            <button onClick={()=>setAnnual(true)} className={`px-4 py-2 rounded-full text-sm transition flex items-center gap-2 ${annual?"bg-coral text-white":"text-muted"}`}>Annual <span className="bg-palm/20 text-palm text-xs px-2 py-0.5 rounded-full">-33%</span></button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <Card className="p-8">
              <div className="text-sm text-muted uppercase tracking-widest">Free</div>
              <div className="text-4xl font-bold font-spaceGrotesk mt-2 text-text">$0</div>
              <div className="text-muted text-sm mb-6">forever</div>
              <ul className="space-y-2 text-sm text-muted mb-6">{["Up to 3 trips","Basic budget tracker","Group up to 3 people","Standard itinerary"].map(f=><li key={f}>✓ {f}</li>)}</ul>
              <button className="w-full py-3 rounded-full border-2 border-coral text-coral font-bold hover:bg-coral/5 transition-colors">Get Started Free</button>
            </Card>
            <Card className="p-8 relative" color="#FF6B6B">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-sunset to-pink text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
              <div className="text-sm gradient-text uppercase tracking-widest font-bold">Pro</div>
              <div className="text-4xl font-bold font-spaceGrotesk mt-2 text-text">${annual?"3.33":"4.99"}</div>
              <div className="text-muted text-sm mb-6">/month {annual&&"· billed $39.99/yr"}</div>
              <ul className="space-y-2 text-sm text-muted mb-6">{["Unlimited trips & group size","Full AI Budget Oracle","Outfit planner","Events discovery","Group wallet","Offline mode","Achievements & LVR points","Priority support"].map(f=><li key={f}>✓ {f}</li>)}</ul>
              <button className="w-full py-3 rounded-full bg-coral text-white font-bold hover:bg-sunset transition-colors shadow-lg">Start Pro Free Trial</button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
