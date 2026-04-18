"use client";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const features = [
  {
    emoji: "🧠",
    tag: "AI Budget Oracle",
    headline: "Your trip, optimized to the dollar.",
    bullets: [
      "Auto-allocates budget across 5 categories",
      "Real-time tracking as you book",
      "Alerts before you overspend",
      "Shuffles when things change",
      "Learns your spending style over time",
    ],
    mock: (
      <div>
        <div className="flex justify-between text-sm mb-2"><span>$1,760 / $2,000</span><span className="text-green">88%</span></div>
        <div className="h-2 bg-border rounded-full overflow-hidden"><div className="h-full w-[88%] bg-gradient-to-r from-purple to-pink" /></div>
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
    emoji: "👗",
    tag: "Vacation Outfit Planner",
    headline: "One outfit per day. Already planned.",
    bullets: [
      "Scans your wardrobe via photo",
      "Plans per activity and weather",
      "Identifies missing items",
      "Shops the gap via affiliate links",
      "Packing list auto-generated",
    ],
    mock: (
      <div className="grid grid-cols-3 gap-2 text-xs">
        {["👕","👔","🩳","👙","👗","🧥"].map((e, i) => (
          <div key={i} className="p-3 bg-bg rounded-lg text-center">
            <div className="text-3xl mb-1">{e}</div>
            <div className="text-muted">Day {i + 1}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    emoji: "🎫",
    tag: "Events & Concerts",
    headline: "What's on while you're there.",
    bullets: [
      "Ticketmaster + Songkick integration",
      "Shows only events during your dates",
      "One-tap add to itinerary",
      "Group voting on what to attend",
      "Price + distance aware",
    ],
    mock: (
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3 p-3 bg-bg rounded-lg"><span className="text-2xl">🎵</span><div className="flex-1"><div className="font-bold">Coldplay</div><div className="text-muted text-xs">June 15</div></div><div className="text-purpleLight">€85</div></div>
        <div className="flex items-center gap-3 p-3 bg-bg rounded-lg"><span className="text-2xl">🎷</span><div className="flex-1"><div className="font-bold">Jazz Festival</div><div className="text-muted text-xs">June 16–19</div></div><div className="text-purpleLight">€20</div></div>
        <div className="flex items-center gap-3 p-3 bg-bg rounded-lg"><span className="text-2xl">🏛️</span><div className="flex-1"><div className="font-bold">Colosseum Night</div><div className="text-muted text-xs">June 20</div></div><div className="text-purpleLight">€45</div></div>
      </div>
    ),
  },
  {
    emoji: "📸",
    tag: "Trip Photo Feed",
    headline: "Share in real time with your crew.",
    bullets: [
      "Private group photo feed",
      "Live reactions from friends",
      "Location dots on shared map",
      "Auto-generated trip recap card",
      "Export to camera roll on return",
    ],
    mock: (
      <div className="grid grid-cols-3 gap-2">
        {["🏛️","🍝","🌇","☕","🎨","🌙","🍷","🛵","🌅"].map((e, i) => (
          <div key={i} className="aspect-square bg-bg rounded-lg flex items-center justify-center text-2xl">{e}</div>
        ))}
      </div>
    ),
  },
  {
    emoji: "💸",
    tag: "Split Payments",
    headline: "One wallet. Everyone paid.",
    bullets: [
      "Shared group wallet",
      "Smart per-person splits",
      "Instant international settlement",
      "Receipt scan with AI",
      "Who-owes-who dashboard",
    ],
    mock: (
      <div className="space-y-2 text-sm">
        {[{l:"Hotel",a:560,pp:280},{l:"Flights",a:600,pp:300},{l:"Dinner",a:120,pp:60}].map((r) => (
          <div key={r.l} className="flex justify-between p-3 bg-bg rounded-lg"><span>{r.l}</span><span className="text-purpleLight">${r.a} · ${r.pp}/pp</span></div>
        ))}
      </div>
    ),
  },
  {
    emoji: "🏆",
    tag: "Achievements & Rewards",
    headline: "Every trip earns you more.",
    bullets: [
      "15 unique explorer badges",
      "LVR points redeemable for discounts",
      "Friends leaderboard",
      "Shareable profile card",
      "Bonus points for group trips",
    ],
    mock: (
      <div className="grid grid-cols-3 gap-3 text-center text-xs">
        {["💰","🎉","🇪🇺","🌙","🍝","👥"].map((e, i) => (
          <div key={i} className="p-3 bg-bg rounded-lg"><div className="text-2xl mb-1">{e}</div><div className="text-muted text-[10px]">Earned</div></div>
        ))}
      </div>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold font-spaceGrotesk"
        >
          Features that make <br />
          <span className="gradient-text">Layover.ai irreplaceable</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted mt-5 text-lg max-w-2xl mx-auto"
        >
          Six tools that used to require six apps. Now one.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        {features.map((f, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-4xl mb-6">
                  {f.emoji}
                </div>
                <div className="inline-block text-xs tracking-widest uppercase text-purpleLight border border-purple/40 rounded-full px-3 py-1 mb-3">{f.tag}</div>
                <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk mb-5">{f.headline}</h2>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-muted"><span className="text-purpleLight mt-1">✓</span>{b}</li>
                  ))}
                </ul>
              </div>
              <div><Card className="p-6">{f.mock}</Card></div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-32">
        <div className="rounded-3xl p-10 md:p-16 text-center" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.2))", border: "1px solid rgba(167,139,250,0.4)" }}>
          <h2 className="text-3xl md:text-5xl font-bold font-spaceGrotesk mb-6">
            Ready to plan your first trip?
          </h2>
          <Button href="/demo" variant="primary">See the Demo</Button>
        </div>
      </div>
    </div>
  );
}
