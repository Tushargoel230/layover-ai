"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TripForm from "@/components/demo/TripForm";
import ItineraryView from "@/components/demo/ItineraryView";
import BudgetChart from "@/components/demo/BudgetChart";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { events, outfits } from "@/lib/data";

type Step = "form" | "loading" | "results" | "share";
type Tab = "itinerary" | "budget" | "events" | "outfits" | "group";

const confettiColors = ["#7C3AED", "#EC4899", "#0EA5E9", "#10B981", "#F59E0B"];

export default function DemoPage() {
  const [step, setStep] = useState<Step>("form");
  const [tab, setTab] = useState<Tab>("itinerary");
  const [added, setAdded] = useState<string[]>([]);
  const [members, setMembers] = useState(["Alex (You)", "Sarah"]);
  const [newMember, setNewMember] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setStep("loading");
    setTimeout(() => setStep("results"), 2000);
  };

  return (
    <div className="pt-12 pb-20 min-h-[80vh]">
      <AnimatePresence mode="wait">
        {step === "form" && (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TripForm onGenerate={generate} />
          </motion.div>
        )}

        {step === "loading" && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-32">
            <div className="spinner" />
            <div className="mt-6 text-muted">Layover AI is planning your trip...</div>
          </motion.div>
        )}

        {step === "results" && (
          <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-5xl mx-auto px-4 sm:px-6">
            <button onClick={() => setStep("form")} className="text-muted hover:text-text text-sm mb-6">← Back to form</button>

            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold font-spaceGrotesk">
                7 Days in <span className="gradient-text">Rome, Italy</span>
              </h1>
              <p className="text-muted mt-2">June 14–21, 2026 · $2,000 for 2 travelers</p>
            </div>

            <Card className="p-5 mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted">Budget used</span>
                <span className="text-text font-bold">$1,760 / $2,000</span>
              </div>
              <div className="h-3 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "88%" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-purple to-pink"
                />
              </div>
              <div className="text-xs text-muted mt-2">Remaining: $240 buffer</div>
            </Card>

            <div className="flex gap-1 overflow-x-auto border-b border-border mb-8">
              {(["itinerary", "budget", "events", "outfits", "group"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-3 text-sm capitalize whitespace-nowrap relative ${
                    tab === t ? "text-purpleLight" : "text-muted hover:text-text"
                  }`}
                >
                  {t}
                  {tab === t && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              {tab === "itinerary" && <ItineraryView />}
              {tab === "budget" && <div className="py-6"><BudgetChart /></div>}
              {tab === "events" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {events.map((e) => {
                    const a = added.includes(e.name);
                    return (
                      <Card key={e.name} className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="font-bold font-spaceGrotesk text-lg">{e.name}</div>
                            <div className="text-xs text-muted mt-1">{e.venue} · {e.date}</div>
                          </div>
                          <span className="text-2xl">{e.emoji}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-widest bg-purple/20 text-purpleLight px-2 py-1 rounded-full">{e.tag}</span>
                          <span className="text-purpleLight text-sm">{e.price}</span>
                        </div>
                        <button
                          onClick={() => setAdded((p) => (p.includes(e.name) ? p : [...p, e.name]))}
                          className={`mt-4 w-full py-2 rounded-full text-sm transition ${
                            a ? "bg-green/20 text-green" : "bg-purple text-white hover:bg-purpleLight"
                          }`}
                        >
                          {a ? "Added ✓" : "Add to Trip"}
                        </button>
                      </Card>
                    );
                  })}
                </div>
              )}
              {tab === "outfits" && (
                <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
                  {outfits.map((o) => (
                    <Card key={o.day} className="p-5 min-w-[240px] max-w-[240px] flex-shrink-0">
                      <div className="text-xs text-muted uppercase tracking-widest">Day {o.day}</div>
                      <div className="text-4xl my-4">{o.emojis}</div>
                      <div className="text-sm mb-4">{o.items}</div>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="text-xs bg-teal/20 text-teal px-2 py-1 rounded-full">{o.weather}</span>
                        <span className="text-xs bg-pink/20 text-pink px-2 py-1 rounded-full">{o.activity}</span>
                      </div>
                      <button className="w-full py-2 text-xs rounded-full border border-border hover:border-purple">Shop Missing Items</button>
                    </Card>
                  ))}
                </div>
              )}
              {tab === "group" && (
                <div className="space-y-6">
                  <Card className="p-5">
                    <div className="font-bold mb-4">Members</div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {members.map((m) => (
                        <div key={m} className="flex items-center gap-2 bg-bg border border-border rounded-full px-3 py-1.5">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-xs font-bold">
                            {m.split(" ")[0].slice(0, 2).toUpperCase()}
                          </div>
                          <span className="text-sm">{m}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        value={newMember}
                        onChange={(e) => setNewMember(e.target.value)}
                        placeholder="Add member by email"
                        className="flex-1"
                      />
                      <Button
                        variant="primary"
                        onClick={() => {
                          if (newMember.trim()) {
                            setMembers([...members, newMember.trim()]);
                            setNewMember("");
                          }
                        }}
                      >Add</Button>
                    </div>
                  </Card>
                  <Card className="p-5">
                    <div className="font-bold mb-4">Expense split preview</div>
                    <div className="space-y-2">
                      {[
                        { name: "Hotel booking", amount: 560 },
                        { name: "Flights", amount: 600 },
                        { name: "Colosseum tickets", amount: 60 },
                      ].map((r) => (
                        <div key={r.name} className="flex justify-between text-sm p-3 bg-bg rounded-xl">
                          <span>{r.name}</span>
                          <span className="text-purpleLight">${r.amount} · ${(r.amount / members.length).toFixed(2)}/person</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="primary" className="w-full mt-4">Create Group Wallet</Button>
                  </Card>
                </div>
              )}
            </div>

            <div className="mt-10 text-center">
              <Button variant="primary" onClick={() => setStep("share")}>Share Trip ✨</Button>
            </div>
          </motion.div>
        )}

        {step === "share" && (
          <motion.div key="share" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center py-10 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -20, x: `${(i * 7) % 100}%`, opacity: 1 }}
                  animate={{ y: "120vh", rotate: 720 }}
                  transition={{ duration: 4 + (i % 5), delay: (i % 10) * 0.1, repeat: Infinity }}
                  className="absolute w-2 h-3 rounded-sm"
                  style={{ background: confettiColors[i % confettiColors.length] }}
                />
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-spaceGrotesk mb-4">
              Your Trip is Ready! 🎉
            </h1>

            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-6">
              <span>🇮🇹 Rome</span><span className="text-muted">·</span><span>7 Days</span><span className="text-muted">·</span><span>$2,000</span><span className="text-muted">·</span><span>2 Travelers</span>
            </div>

            <Card className="p-4 mb-8">
              <div className="flex gap-2 items-center">
                <input readOnly value="https://layover.ai/trip/rome-june-2026" className="flex-1 text-sm" />
                <Button
                  variant="primary"
                  onClick={() => {
                    navigator.clipboard?.writeText("https://layover.ai/trip/rome-june-2026");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                >
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(236,72,153,0.15))",
                border: "1px solid #F59E0B",
                boxShadow: "0 0 32px -6px rgba(245,158,11,0.6)",
              }}
            >
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-sm text-orange uppercase tracking-widest mb-1">Achievement Unlocked</div>
              <div className="text-xl font-bold font-spaceGrotesk">First Trip Created</div>
              <div className="text-sm text-muted mt-2">+100 LVR Points</div>
            </motion.div>

            <div className="mt-8">
              <Button variant="secondary" onClick={() => setStep("form")}>Start New Trip</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
