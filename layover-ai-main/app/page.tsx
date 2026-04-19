"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import InfluencerTrips from "@/components/landing/InfluencerTrips";
import WorldMap from "@/components/landing/WorldMap";
import { destinations } from "@/lib/data";

const travelTypes = [
  {
    label: "Ocean Lover",
    desc: "Salt air, sunsets, surf at dawn.",
    img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&auto=format&fit=crop",
  },
  {
    label: "Jungle Lover",
    desc: "Waterfalls, wild trails, deep green.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&auto=format&fit=crop",
  },
  {
    label: "Peace Lover",
    desc: "Mist, mountains, quiet mornings.",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&auto=format&fit=crop",
  },
];

const conceptItems = [
  { label: "Smart Budget", desc: "Real-time price tracking across 200+ providers" },
  { label: "AI Itinerary", desc: "Built around your travel style and dates" },
  { label: "Events Feed", desc: "Concerts and experiences at your destination" },
  { label: "One Checkout", desc: "Flights, stays and tours in one booking" },
  { label: "Personalization", desc: "Learns your taste — gets better every trip" },
];

const featureBlocks = [
  {
    tag: "AI Budget Oracle",
    headline: "Your budget, planned to the dollar.",
    body: "Atlas auto-allocates your budget across flights, hotels, food, and activities — then adapts in real time as you book.",
    mock: (
      <div className="p-6">
        <div className="flex justify-between text-sm mb-3">
          <span className="text-muted font-medium">Budget used</span>
          <span className="font-bold text-text">$1,760 / $2,000</span>
        </div>
        <div className="h-2 bg-border rounded-full overflow-hidden mb-4">
          <div className="h-full w-[88%] bg-gradient-to-r from-primary to-primaryLight rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[["✈ Flights","$600"],["🏨 Hotels","$560"],["🍽 Food","$400"],["🎟 Activities","$200"]].map(([l,v])=>(
            <div key={l} className="flex justify-between p-3 bg-bg rounded-xl text-xs">
              <span className="text-muted">{l}</span>
              <span className="font-semibold text-text">{v}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "Outfit Planner",
    headline: "Packed perfectly for every day.",
    body: "Atlas reads the 7-day forecast at your destination and curates a capsule outfit board — practical, weather-proof, and never tourist-coded.",
    mock: (
      <div className="p-6">
        <div className="grid grid-cols-3 gap-2">
          {[["Day 1","Beach","26°C"],["Day 2","Museum","22°C"],["Day 3","Hiking","18°C"],["Day 4","Dinner","20°C"],["Day 5","Market","24°C"],["Day 6","Flight","—"]].map(([day,act,temp])=>(
            <div key={day} className="p-3 bg-bg rounded-xl text-center">
              <div className="text-xs font-bold text-text">{day}</div>
              <div className="text-xs text-muted mt-1">{act}</div>
              <div className="text-xs text-primary font-semibold mt-0.5">{temp}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "Split Payments",
    headline: "One group wallet. Zero arguments.",
    body: "Add your travel companions, and Atlas handles every split automatically — hotels, dinners, taxis. Everyone knows exactly what they owe.",
    mock: (
      <div className="p-6 space-y-3">
        {[{l:"Marriott Hotel",a:"$560",pp:"$280 / person"},{l:"Return Flights",a:"$600",pp:"$300 / person"},{l:"Dinner at Noma",a:"$180",pp:"$90 / person"}].map(r=>(
          <div key={r.l} className="flex items-center justify-between p-3 bg-bg rounded-xl">
            <div>
              <div className="text-sm font-semibold text-text">{r.l}</div>
              <div className="text-xs text-muted mt-0.5">{r.pp}</div>
            </div>
            <div className="text-sm font-bold text-primary">{r.a}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: "Events & Concerts",
    headline: "Never miss what's on while you're there.",
    body: "Atlas surfaces concerts, festivals, and local experiences happening during your exact dates — then adds them to your itinerary in one tap.",
    mock: (
      <div className="p-6 space-y-3">
        {[{e:"🎵",n:"Coldplay — Stadium Tour",d:"June 15 · 8pm",p:"€85"},{e:"🎷",n:"Berlin Jazz Festival",d:"June 16–19",p:"€20"},{e:"🏛",n:"Louvre Night Tour",d:"June 17 · 7pm",p:"€35"}].map(r=>(
          <div key={r.n} className="flex items-center gap-3 p-3 bg-bg rounded-xl">
            <span className="text-xl">{r.e}</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-text truncate">{r.n}</div>
              <div className="text-xs text-muted">{r.d}</div>
            </div>
            <div className="text-primary font-bold text-sm flex-shrink-0">{r.p}</div>
          </div>
        ))}
      </div>
    ),
  },
];

const testimonials = [
  { name: "Maya K.", role: "Solo traveler · Tokyo, 14 days", quote: "I planned 3 weeks across Southeast Asia in under an hour. The budget oracle saved me $400 I didn't know I was overspending." },
  { name: "Chen Squad", role: "Group of 6 · Barcelona", quote: "No more Splitwise chaos or group chats about who owes what. One wallet, one itinerary, zero friction." },
  { name: "Leo & Amara", role: "Couple · Rome, 7 days", quote: "We found a Coldplay concert in Rome the night before we arrived. Atlas surfaced it during trip planning — we never would have known." },
  { name: "David M.", role: "Frequent traveler · 34 countries", quote: "The memory map is stupidly addictive. I'm already planning my next trip just to add a new pin." },
];

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [annual, setAnnual] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) router.push("/demo");
    else router.push("/demo");
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,45,50,0.55) 0%, rgba(5,45,50,0.25) 55%, rgba(5,45,50,0.65) 100%)" }} />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-black font-spaceGrotesk tracking-tighter mb-4 select-none"
            style={{ fontSize: "clamp(4.5rem, 12vw, 8rem)", lineHeight: 1, letterSpacing: '-0.03em', color: "27B4F5" }}
          >
            ATLAS.AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-white/75 text-lg font-light tracking-wide mb-8"
          >
            Smarter trips. Better stories.
          </motion.p>

          {/* Search bar */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSearch}
            className="w-full mb-8 max-w-lg"
          >
            <div className="hero-search-wrap">
              <input
                className="hero-search-input"
                placeholder="Where do you want to go?"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit" className="hero-search-btn">
                Explore
              </button>
            </div>
          </motion.form>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/demo")}
            className="flex items-center gap-3 bg-white text-text font-semibold rounded-full px-7 py-3.5 shadow-2xl hover:bg-white/95 transition-all"
          >
            Book a trip
            <span className="w-7 h-7 bg-text text-white rounded-full flex items-center justify-center text-xs">↗</span>
          </motion.button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex flex-wrap justify-center gap-8 px-4 z-10"
        >
          {[["4.9", "Average rating"],["50,000+", "Travelers"],["98", "Countries covered"]].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-white font-bold text-lg">{v}</div>
              <div className="text-white/60 text-xs">{l}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── CONCEPT ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">The concept</p>
            <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-text leading-tight">
              Five ingredients that turn a search bar<br className="hidden md:block" /> into your favourite travel ritual.
            </h2>
          </motion.div>
          <div className="bg-bg rounded-2xl border border-border p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {conceptItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: "rgba(10,112,117,0.08)", border: "1px solid rgba(10,112,117,0.15)" }}
                  >
                    {i === 0 ? "💰" : i === 1 ? "✈️" : i === 2 ? "🎵" : i === 3 ? "🛒" : "⭐"}
                  </div>
                  <div className="font-semibold text-sm text-text">{item.label}</div>
                  <div className="text-xs text-muted leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAVEL TYPE QUIZ ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #F4FAFB, #EBF6F7)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Tap a vibe</p>
            <h2 className="text-3xl md:text-5xl font-bold font-spaceGrotesk text-text">
              What kind of traveler are <span className="gradient-text-teal">you?</span>
            </h2>
            <p className="text-muted mt-3">We&apos;ll tune every recommendation to it.</p>
          </motion.div>
          <div className="flex items-end justify-center gap-3 md:gap-5">
            {travelTypes.map((t, i) => {
              const isCenter = i === 1;
              const isSel = selectedType === t.label;
              return (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: isCenter ? -10 : -6 }}
                  onClick={() => setSelectedType(isSel ? null : t.label)}
                  className="cursor-pointer relative overflow-hidden rounded-2xl flex-shrink-0"
                  style={{
                    width: isCenter ? "35%" : "30%",
                    maxWidth: isCenter ? 300 : 260,
                    height: isCenter ? 400 : 320,
                    border: isSel ? "2.5px solid #0A7075" : "2.5px solid transparent",
                    boxShadow: isSel ? "0 0 0 5px rgba(10,112,117,0.15), 0 16px 40px -8px rgba(0,0,0,0.25)" : "0 12px 40px -8px rgba(0,0,0,0.2)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                >
                  <img src={t.img} alt={t.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)" }} />
                  {isSel && (
                    <div className="absolute top-3 right-3 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white font-bold font-spaceGrotesk">{t.label}</div>
                    <div className="text-white/75 text-xs mt-0.5">{t.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-8 text-center"
              >
                <p className="text-muted text-sm mb-4">
                  Great — we&apos;ll personalise every suggestion for <strong className="text-text">{selectedType}</strong> travel.
                </p>
                <button
                  onClick={() => router.push("/demo")}
                  className="bg-primary text-white font-semibold rounded-full px-8 py-3 hover:bg-primaryDark transition-colors"
                >
                  Start planning →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── WORLD MAP ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Memory Map</p>
            <h2 className="text-3xl md:text-5xl font-bold font-spaceGrotesk text-text">
              Explore the <span className="gradient-text-teal">world</span> with Atlas
            </h2>
            <p className="text-muted mt-3">Hover a pin to preview. Click to start planning.</p>
          </motion.div>
          <WorldMap />
        </div>
      </section>

      {/* ── TRENDING TRIPS ────────────────────────────────────────────── */}
      <InfluencerTrips />

      {/* ── DESTINATIONS ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Popular right now</p>
            <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-text">
              Where do you want to wake up?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.map((d, i) => (
              <motion.button
                key={d.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                onClick={() => router.push("/demo")}
                className="relative rounded-2xl overflow-hidden h-56 text-left w-full"
                style={{ boxShadow: "0 4px 24px -6px rgba(10,112,117,0.2)" }}
              >
                <img src={d.img} alt={d.city} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-lg font-bold font-spaceGrotesk">{d.city}</div>
                  <div className="text-white/70 text-xs">{d.country}</div>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-bold text-text">
                  {d.price}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #F4FAFB, #EBF6F7)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">What Atlas does</p>
            <h2 className="text-3xl md:text-5xl font-bold font-spaceGrotesk text-text">
              Six tools. One app.
            </h2>
          </motion.div>
          <div className="space-y-20">
            {featureBlocks.map((f, i) => {
              const flip = i % 2 === 1;
              return (
                <motion.div
                  key={f.tag}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${flip ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div>
                    <span className="inline-block text-xs tracking-widest uppercase text-primary border border-primary/25 bg-primary/5 rounded-full px-3 py-1 mb-4">
                      {f.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-spaceGrotesk text-text mb-4">{f.headline}</h3>
                    <p className="text-muted leading-relaxed">{f.body}</p>
                    <button
                      onClick={() => router.push("/demo")}
                      className="mt-6 text-primary font-semibold text-sm hover:underline"
                    >
                      See it in action →
                    </button>
                  </div>
                  <Card className="overflow-hidden" hover={false}>
                    {f.mock}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Traveler stories</p>
            <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-text">What people are saying</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Card className="p-6 h-full flex flex-col" hover={false}>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => <span key={j} className="text-primaryLight text-sm">★</span>)}
                  </div>
                  <p className="text-text text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <div className="font-semibold text-sm text-text">{t.name}</div>
                    <div className="text-xs text-muted mt-0.5">{t.role}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TEASER ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #F4FAFB, #EBF6F7)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold font-spaceGrotesk text-text mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-muted mb-8">Free to start. Upgrade when you need more.</p>
          <div className="inline-flex bg-white border border-border rounded-full p-1 shadow-sm mb-10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!annual ? "bg-primary text-white shadow-sm" : "text-muted"}`}
            >Monthly</button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-primary text-white shadow-sm" : "text-muted"}`}
            >
              Annual
              <span className="text-xs bg-palm/15 text-palm px-2 py-0.5 rounded-full font-semibold">−33%</span>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-5 text-left">
            <Card className="p-8" hover={false}>
              <div className="text-xs text-muted uppercase tracking-widest font-semibold mb-3">Free</div>
              <div className="text-5xl font-bold font-spaceGrotesk text-text">$0</div>
              <div className="text-muted text-sm mt-1 mb-6">forever</div>
              <ul className="space-y-2.5 text-sm text-muted mb-8">
                {["Up to 3 trips","Basic budget tracker","Groups up to 3","Standard itinerary planner"].map(f=>(
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="text-palm text-xs">✓</span>{f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/demo")}
                className="w-full py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                Get started free
              </button>
            </Card>
            <Card className="p-8 relative" color="#0A7075" hover={false}>
              <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-xs gradient-text-teal uppercase tracking-widest font-bold mb-3">Pro</div>
              <div className="text-5xl font-bold font-spaceGrotesk text-text">${annual ? "3.33" : "4.99"}</div>
              <div className="text-muted text-sm mt-1 mb-6">
                /month{annual ? " · billed $39.99/yr" : ""}
              </div>
              <ul className="space-y-2.5 text-sm text-muted mb-8">
                {["Everything in Free","Unlimited trips & group size","AI Budget Oracle","Outfit Planner","Events & concerts discovery","Group wallet & split payments","Achievements & ATL points","Priority support"].map(f=>(
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="text-palm text-xs">✓</span>{f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/pricing")}
                className="w-full py-3 rounded-full bg-primary text-white font-semibold hover:bg-primaryDark transition-colors shadow-lg"
              >
                Start free trial
              </button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
