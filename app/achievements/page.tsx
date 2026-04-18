"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { badges } from "@/lib/data";

const activity = [
  { icon: "🏆", text: "Earned Budget Hero badge", time: "2 days ago" },
  { icon: "✈️", text: "Completed trip to Amsterdam", time: "1 week ago" },
  { icon: "👥", text: "Invited 3 friends to Rome trip", time: "1 week ago" },
  { icon: "🎵", text: "Added Coldplay concert to Rome itinerary", time: "2 weeks ago" },
  { icon: "💸", text: "Split $560 hotel bill with 3 friends", time: "2 weeks ago" },
];

const leaderboard = [
  { rank: 1, name: "Maya K.", countries: 22, trips: 31, score: 9840 },
  { rank: 2, name: "Jordan P.", countries: 15, trips: 24, score: 5120 },
  { rank: 3, name: "Alex T (You)", countries: 7, trips: 12, score: 2840, me: true },
  { rank: 4, name: "Sarah L.", countries: 6, trips: 9, score: 2104 },
  { rank: 5, name: "Ben R.", countries: 4, trips: 7, score: 1500 },
];

export default function AchievementsPage() {
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState("");

  const earnedBadges = badges.filter((b) => b.earned).slice(0, 3);

  return (
    <div className="pt-12 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Profile */}
      <Card className="p-6 md:p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-3xl font-bold">AT</div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-2xl font-bold font-spaceGrotesk">Alex T</div>
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              <span className="text-xs bg-purple/20 text-purpleLight px-3 py-1 rounded-full">Explorer · Level 12</span>
              <span className="text-xs bg-orange/20 text-orange px-3 py-1 rounded-full">2,840 LVR Points</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-muted mb-1"><span>Progress to Level 13</span><span>2,840 / 3,000</span></div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(2840 / 3000) * 100}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-purple to-pink"
                />
              </div>
            </div>
          </div>
          <Button variant="primary" onClick={() => setModal(true)}>Share Profile</Button>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-8">
          {[{v:"7",l:"Countries"},{v:"12",l:"Trips"},{v:"4",l:"Badges This Year"}].map((s) => (
            <div key={s.l} className="p-4 bg-bg rounded-xl text-center">
              <div className="text-2xl font-bold font-spaceGrotesk gradient-text">{s.v}</div>
              <div className="text-xs text-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Badges */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold font-spaceGrotesk mb-6">Your Badges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {badges.map((b, i) => (
            <motion.div key={b.name} transition={{ delay: i * 0.05 }}>
              <Badge name={b.name} emoji={b.emoji} earned={b.earned} description={b.description} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Activity */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold font-spaceGrotesk mb-6">Recent Activity</h2>
        <Card className="p-5">
          <ul className="divide-y divide-border">
            {activity.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 py-3"
              >
                <div className="text-2xl">{a.icon}</div>
                <div className="flex-1 text-sm">{a.text}</div>
                <div className="text-xs text-muted">{a.time}</div>
              </motion.li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Leaderboard */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold font-spaceGrotesk mb-6">Friends Leaderboard</h2>
        <Card className="p-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted text-xs uppercase tracking-widest text-left">
                <th className="py-2 pr-4">Rank</th>
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Countries</th>
                <th className="py-2 pr-4">Trips</th>
                <th className="py-2">LVR Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((r, i) => (
                <tr key={r.rank} className={r.me ? "bg-purple/15 text-purpleLight" : ""}>
                  <td className="py-3 pr-4">
                    <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="font-bold">
                      #{r.rank}
                    </motion.span>
                  </td>
                  <td className="py-3 pr-4">{r.name}</td>
                  <td className="py-3 pr-4">{r.countries}</td>
                  <td className="py-3 pr-4">{r.trips}</td>
                  <td className="py-3 font-bold">{r.score.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-5 py-3 z-50 text-sm"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-2xl p-6 text-center"
              style={{
                background: "linear-gradient(160deg, #0C0C1C, #1A1A32)",
                border: "1px solid rgba(167,139,250,0.5)",
                boxShadow: "0 0 60px -10px rgba(124,58,237,0.6)",
              }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-2xl font-bold mb-3">AT</div>
              <div className="text-xl font-bold font-spaceGrotesk">Alex T</div>
              <div className="text-sm text-muted mb-4">Explorer · Level 12</div>
              <div className="flex justify-center gap-3 mb-4">
                {earnedBadges.map((b) => <span key={b.name} className="text-3xl">{b.emoji}</span>)}
              </div>
              <div className="text-sm">
                <span className="text-orange font-bold">2,840</span> LVR · <span className="text-purpleLight font-bold">{badges.filter(b=>b.earned).length}</span> Badges
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <Button
                  variant="primary"
                  onClick={() => {
                    navigator.clipboard?.writeText("https://layover.ai/u/alex");
                    setToast("Link copied!");
                    setTimeout(() => setToast(""), 2000);
                  }}
                >
                  Copy Card Link
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setToast("Feature coming soon!");
                    setTimeout(() => setToast(""), 2000);
                  }}
                >
                  Download Card
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
