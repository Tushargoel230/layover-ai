"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const tiers = [
  {
    name: "Free", monthly: "$0", annual: "$0", tagline: "forever", cta: "Get Started Free",
    features: ["Up to 3 trips","Basic itinerary planner","Budget tracker (manual)","Group up to 3","Standard AI suggestions","Community templates"],
  },
  {
    name: "Pro", monthly: "$4.99", annual: "$3.33", tagline: "billed annually at $39.99", cta: "Start Pro Free Trial", popular: true,
    features: ["Everything in Free","Unlimited trips & group size","AI Budget Oracle","Outfit planner","Events & concerts discovery","Group wallet & split payments","Offline mode","Achievements & ATL points","Priority support","Trip memory book"],
  },
  {
    name: "Business", monthly: "$29", annual: "$19", tagline: "per seat", cta: "Contact Sales",
    features: ["Everything in Pro","White-label API access","20 team members","Analytics dashboard","Dedicated account manager","SLA guarantee","Custom integrations"],
  },
];

const comparison = [
  { f:"Trips", free:"3", pro:"Unlimited", biz:"Unlimited" },
  { f:"Group size", free:"3", pro:"Unlimited", biz:"Unlimited" },
  { f:"AI Budget Oracle", free:"—", pro:"✅", biz:"✅" },
  { f:"Outfit planner", free:"—", pro:"✅", biz:"✅" },
  { f:"Events discovery", free:"—", pro:"✅", biz:"✅" },
  { f:"Group wallet", free:"—", pro:"✅", biz:"✅" },
  { f:"Offline mode", free:"—", pro:"✅", biz:"✅" },
  { f:"Achievements & ATL", free:"—", pro:"✅", biz:"✅" },
  { f:"Priority support", free:"—", pro:"✅", biz:"✅" },
  { f:"White-label API", free:"—", pro:"—", biz:"✅" },
  { f:"Analytics dashboard", free:"—", pro:"—", biz:"✅" },
  { f:"Dedicated manager", free:"—", pro:"—", biz:"✅" },
];

const faqs = [
  { q:"What is Atlas Pro?", a:"Atlas Pro unlocks unlimited trips, AI-powered budgeting, outfit planning, events discovery, group wallet payments, and achievements — everything you need for serious trip planning." },
  { q:"Can I cancel anytime?", a:"Yes. Cancel with one click from your account settings. You'll retain Pro features until the end of your billing period." },
  { q:"How large can my group be?", a:"Free supports up to 3 travelers per trip. Pro and Business support unlimited group members." },
  { q:"Does offline mode work without internet?", a:"Yes. Pro users can cache the entire itinerary, map, and tickets for full offline access while abroad." },
  { q:"What is the refund policy?", a:"14-day no-questions-asked refund window on annual plans. Monthly plans can be cancelled anytime for immediate non-renewal." },
  { q:"What is the Business API?", a:"Business tier includes a REST API for embedding Atlas planning into your own apps, plus analytics, white-label branding, and a dedicated account manager." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-12 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold font-spaceGrotesk">
          Simple <span className="gradient-text-teal">pricing</span>
        </h1>
        <p className="text-muted mt-4">Free forever. Pro unlocks everything. Business scales with you.</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white border border-border rounded-full p-1 shadow-sm">
          <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-full text-sm transition ${!annual ? "bg-primary text-white shadow-sm" : "text-muted"}`}>Monthly</button>
          <button onClick={() => setAnnual(true)} className={`px-4 py-2 rounded-full text-sm transition flex items-center gap-2 ${annual ? "bg-primary text-white shadow-sm" : "text-muted"}`}>
            Annual <span className="bg-palm/20 text-palm text-xs px-2 py-0.5 rounded-full">-33%</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={t.popular ? "md:scale-105" : ""}>
            <Card className="p-8 h-full relative" color={t.popular ? "#0A7075" : "#14B8C4"}>
              {t.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-primary to-primaryLight text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  POPULAR
                </div>
              )}
              <div className={`text-sm uppercase tracking-widest ${t.popular ? "gradient-text-teal font-bold" : "text-muted"}`}>{t.name}</div>
              <div className="text-4xl font-bold font-spaceGrotesk mt-2 text-text">{annual ? t.annual : t.monthly}</div>
              <div className="text-muted text-sm mb-6">{t.name==="Free" ? t.tagline : annual ? "/month · " + t.tagline : "/month"}</div>
              <ul className="space-y-2 text-sm text-muted mb-6">
                {t.features.map(f=><li key={f} className="flex items-start gap-2"><span className="text-palm mt-0.5">✓</span>{f}</li>)}
              </ul>
              <Button variant={t.popular ? "primary" : "secondary"} className="w-full">{t.cta}</Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Comparison table */}
      <section className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold font-spaceGrotesk mb-6 text-center">Compare plans</h2>
        <Card className="p-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted text-xs uppercase tracking-widest text-left border-b border-border">
                <th className="py-3 pr-4">Feature</th>
                <th className="py-3 px-4 text-center">Free</th>
                <th className="py-3 px-4 text-center gradient-text-teal font-bold">Pro</th>
                <th className="py-3 px-4 text-center">Business</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(r=>(
                <tr key={r.f} className="border-t border-border hover:bg-bg/50 transition-colors">
                  <td className="py-3 pr-4 text-text">{r.f}</td>
                  <td className="py-3 px-4 text-center text-muted">{r.free}</td>
                  <td className="py-3 px-4 text-center">{r.pro}</td>
                  <td className="py-3 px-4 text-center">{r.biz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-spaceGrotesk mb-6 text-center">Frequently asked</h2>
        <div className="space-y-3">
          {faqs.map((f,i)=>{
            const open = openFaq===i;
            return (
              <div key={f.q} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
                <button onClick={()=>setOpenFaq(open?null:i)} className="w-full text-left flex items-center justify-between p-5">
                  <span className="font-bold text-text">{f.q}</span>
                  <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-primary text-2xl font-light">+</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-muted text-sm">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust */}
      <div className="flex flex-wrap justify-center gap-4 mt-16 text-sm text-muted">
        {["No credit card required","Cancel anytime","GDPR compliant","256-bit SSL"].map(t=>(
          <div key={t} className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 shadow-sm">
            <span className="text-palm font-bold">✓</span> {t}
          </div>
        ))}
      </div>
    </div>
  );
}
