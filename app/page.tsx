"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const floatingEmojis = ["✈️", "🗺️", "🎵", "👗", "📸", "💸"];

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
    emoji: "🧠",
    tag: "AI Budget Oracle",
    headline: "Tell us your budget. We plan everything.",
    bullets: [
      "Auto-allocates across categories",
      "Real-time budget tracking",
      "Alerts before overspend",
      "Adapts when you book",
    ],
    mock: (
      <div>
        <div className="flex justify-between text-sm mb-2"><span>Budget Used</span><span>88%</span></div>
        <div className="h-2 bg-border rounded-full overflow-hidden">
          <div className="h-full w-[88%] bg-gradient-to-r from-purple to-pink" />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
          <div className="p-2 bg-bg rounded-lg">✈️ Flights $600</div>
          <div className="p-2 bg-bg rounded-lg">🏨 Hotels $560</div>
          <div className="p-2 bg-bg rounded-lg">🍝 Food $400</div>
          <div className="p-2 bg-bg rounded-lg">🎟️ Activities $200</div>
        </div>
      </div>
    ),
  },
  {
    emoji: "🎫",
    tag: "Events & Concerts",
    headline: "Never miss Coldplay in Rome again.",
    bullets: [
      "Ticketmaster & Songkick integration",
      "Surfaces events during your trip dates",
      "One tap to add to itinerary",
      "Group voting on events",
    ],
    mock: (
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3 p-3 bg-bg rounded-lg"><span className="text-2xl">🎵</span><div className="flex-1"><div className="font-bold">Coldplay World Tour</div><div className="text-muted text-xs">June 15 · Stadio Olimpico</div></div><div className="text-purpleLight">€85</div></div>
        <div className="flex items-center gap-3 p-3 bg-bg rounded-lg"><span className="text-2xl">🎷</span><div className="flex-1"><div className="font-bold">Jazz Festival</div><div className="text-muted text-xs">June 16–19 · Villa Celimontana</div></div><div className="text-purpleLight">€20</div></div>
      </div>
    ),
  },
  {
    emoji: "👗",
    tag: "Outfit Planner",
    headline: "Dressed for every day of the trip.",
    bullets: [
      "Scans your wardrobe",
      "Plans outfits per activity and weather",
      "Spots missing items",
      "Shops the gap with affiliate links",
    ],
    mock: (
      <div className="grid grid-cols-3 gap-2 text-xs">
        {[1, 2, 3, 4, 5, 6].map((d) => (
          <div key={d} className="p-3 bg-bg rounded-lg text-center">
            <div className="text-2xl mb-1">{["👕", "👔", "🩳", "👙", "👗", "🧥"][d - 1]}</div>
            <div className="text-muted">Day {d}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    emoji: "📸",
    tag: "Trip Feed",
    headline: "Post photos. Make friends jealous.",
    bullets: [
      "Private group photo feed",
      "Live trip reactions",
      "Friends watch your location dot",
      "Shareable trip recap card",
    ],
    mock: (
      <div className="grid grid-cols-3 gap-2">
        {["🏛️", "🍝", "🌇", "☕", "🎨", "🌙"].map((e, i) => (
          <div key={i} className="aspect-square bg-bg rounded-lg flex items-center justify-center text-3xl">{e}</div>
        ))}
      </div>
    ),
  },
  {
    emoji: "💸",
    tag: "Split Payments",
    headline: "One wallet. Zero awkward convos.",
    bullets: [
      "Shared group wallet",
      "Smart per-person splits",
      "Instant international settlement",
      "Receipt scan with AI",
    ],
    mock: (
      <div className="space-y-2 text-sm">
        {[{ l: "Hotel", a: 560 }, { l: "Flights", a: 600 }, { l: "Dinner", a: 120 }].map((r) => (
          <div key={r.l} className="flex justify-between p-3 bg-bg rounded-lg"><span>{r.l}</span><span className="text-purpleLight">{`$${r.a} · $${Math.round(r.a / 2)}/pp`}</span></div>
        ))}
      </div>
    ),
  },
  {
    emoji: "🏆",
    tag: "Achievements",
    headline: "Travel more. Earn more.",
    bullets: [
      "15 unique explorer badges",
      "LVR points redeemable for discounts",
      "Friends leaderboard",
      "Shareable profile card",
    ],
    mock: (
      <div className="grid grid-cols-3 gap-3 text-center text-xs">
        {["💰", "🎉", "🇪🇺", "🌙", "🍝", "👥"].map((e, i) => (
          <div key={i} className="p-3 bg-bg rounded-lg"><div className="text-2xl mb-1">{e}</div></div>
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
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #EC4899 0%, transparent 60%)" }} />
          {floatingEmojis.map((e, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl md:text-5xl select-none"
              style={{
                top: `${10 + (i * 13) % 70}%`,
                left: `${(i * 17 + 8) % 90}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {e}
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-16 pb-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-purpleLight border border-purple/40 rounded-full px-4 py-1.5 mb-8">
              LAYOVER.AI
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-bold font-spaceGrotesk leading-[1.05] max-w-5xl">
              The Last Travel App <br className="hidden sm:block" />
              <span className="gradient-text">You'll Ever Need.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted max-w-2xl">
              AI plans your trip inside your budget. Finds concerts at your destination. Styles your outfits. Splits every expense. All in one place.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button href="/demo" variant="primary">Start Planning Free</Button>
              <Button href="/demo" variant="secondary">Watch Demo</Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-14 w-full max-w-lg">
              <Card className="p-6 text-left">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-muted uppercase tracking-widest">Day 1</div>
                    <div className="text-xl font-bold font-spaceGrotesk">Rome, Italy</div>
                  </div>
                  <span className="text-2xl">🇮🇹</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-bg rounded-xl">
                    <div className="flex items-center gap-3"><span>🏛️</span><div><div className="text-sm">Vatican at 9am</div><div className="text-xs text-muted">Morning</div></div></div>
                    <div className="text-purpleLight text-sm">€40</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-bg rounded-xl">
                    <div className="flex items-center gap-3"><span>🍝</span><div><div className="text-sm">Lunch at Campo de' Fiori</div><div className="text-xs text-muted">Afternoon</div></div></div>
                    <div className="text-purpleLight text-sm">€18</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-bg rounded-xl">
                    <div className="flex items-center gap-3"><span>🌇</span><div><div className="text-sm">Sunset Aperitivo</div><div className="text-xs text-muted">Evening</div></div></div>
                    <div className="text-purpleLight text-sm">€12</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-spaceGrotesk text-center mb-16"
          >
            You're using <span className="gradient-text">6 apps</span> for one trip.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problemApps.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="p-6">
                  <div className="text-xl font-bold font-spaceGrotesk">{a.name}</div>
                  <div className="text-muted mt-2 text-sm">{a.does}.</div>
                  <div className="mt-4 text-sm text-red flex items-center gap-2">
                    <span>⚠️</span>Missing: {a.missing}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-spaceGrotesk text-center mt-16"
          >
            <span className="gradient-text">Layover.ai replaces all of them.</span>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-4 sm:px-6 space-y-32">
        <div className="max-w-7xl mx-auto">
          {featureBlocks.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={f.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-10 items-center mb-24 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <Card className="p-6">{f.mock}</Card>
                </div>
                <div>
                  <div className="text-6xl mb-4">{f.emoji}</div>
                  <div className="inline-block text-xs tracking-widest uppercase text-purpleLight border border-purple/40 rounded-full px-3 py-1 mb-3">
                    {f.tag}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-spaceGrotesk mb-5">
                    {f.headline}
                  </h3>
                  <ul className="space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-muted">
                        <span className="text-purpleLight mt-1">✓</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 px-4 sm:px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { v: "4.2B", l: "Trips planned" },
              { v: "$340M", l: "Saved on budget" },
              { v: "98", l: "Countries covered" },
              { v: "2.1M", l: "Travelers" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text font-spaceGrotesk">{s.v}</div>
                <div className="text-sm text-muted mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-6">
                <div className="text-lg text-text">"{t.quote}"</div>
                <div className="mt-4 text-sm">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-muted">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-spaceGrotesk mb-4">
            Simple <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-muted mb-8">Start free. Upgrade when you're hooked.</p>
          <div className="inline-flex bg-card border border-border rounded-full p-1 mb-12">
            <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-full text-sm transition ${!annual ? "bg-purple text-white" : "text-muted"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-2 rounded-full text-sm transition flex items-center gap-2 ${annual ? "bg-purple text-white" : "text-muted"}`}>Annual <span className="bg-green/20 text-green text-xs px-2 py-0.5 rounded-full">-33%</span></button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <Card className="p-8">
              <div className="text-sm text-muted uppercase tracking-widest">Free</div>
              <div className="text-4xl font-bold font-spaceGrotesk mt-2">$0</div>
              <div className="text-muted text-sm mb-6">forever</div>
              <ul className="space-y-2 text-sm text-muted mb-6">
                <li>✓ Up to 3 trips</li>
                <li>✓ Basic budget tracker</li>
                <li>✓ Group up to 3 people</li>
                <li>✓ Standard itinerary</li>
              </ul>
              <Button variant="secondary" className="w-full">Get Started Free</Button>
            </Card>
            <Card className="p-8 relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-purple to-pink text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
              <div className="text-sm gradient-text uppercase tracking-widest font-bold">Pro</div>
              <div className="text-4xl font-bold font-spaceGrotesk mt-2">
                ${annual ? "3.33" : "4.99"}
              </div>
              <div className="text-muted text-sm mb-6">
                /month {annual && "· billed $39.99/yr"}
              </div>
              <ul className="space-y-2 text-sm text-muted mb-6">
                <li>✓ Unlimited trips & group size</li>
                <li>✓ Full AI Budget Oracle</li>
                <li>✓ Outfit planner</li>
                <li>✓ Events discovery</li>
                <li>✓ Group wallet</li>
                <li>✓ Offline mode</li>
                <li>✓ Achievements & LVR points</li>
                <li>✓ Priority support</li>
              </ul>
              <Button variant="primary" className="w-full">Start Pro Free Trial</Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
