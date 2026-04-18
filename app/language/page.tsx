"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { languagePacks, LanguagePhrase } from "@/lib/data";

const categories = ["Greetings", "Food", "Transport", "Emergency"];
const destinations = Object.keys(languagePacks);

function PhraseCard({ phrase }: { phrase: LanguagePhrase }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card h-44 cursor-pointer" onClick={() => setFlipped((f) => !f)}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-front flex flex-col justify-between p-5 bg-white border border-border shadow-sm">
          <div>
            <div className="text-xs text-muted uppercase tracking-widest mb-2">{phrase.category}</div>
            <div className="text-lg font-bold text-text">{phrase.english}</div>
          </div>
          <div>
            <div className="text-2xl font-bold gradient-text font-spaceGrotesk">{phrase.local}</div>
            <div className="text-sm text-muted mt-1 italic">/{phrase.phonetic}/</div>
          </div>
          <div className="text-xs text-muted text-right">Tap to flip →</div>
        </div>
        {/* Back */}
        <div className="flip-card-back flex flex-col justify-center items-center p-5 text-center"
          style={{ background: "linear-gradient(135deg, #FEF3C7, #FFEDD5)", border: "1.5px solid #FDE68A" }}>
          <div className="text-3xl mb-3">🔊</div>
          <div className="text-sm font-bold text-text mb-2">Pronunciation tip</div>
          <div className="text-muted text-sm">{phrase.tip}</div>
        </div>
      </div>
    </div>
  );
}

function QuizSection({ phrases }: { phrases: LanguagePhrase[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const quizPool = phrases.slice(0, 8);
  const q = quizPool[current];

  const options = (() => {
    const wrong = phrases.filter((p) => p.english !== q.english).slice(0, 3).map((p) => p.english);
    const all = [...wrong, q.english].sort(() => Math.random() - 0.5);
    return all;
  })();

  const choose = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === q.english) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 >= quizPool.length) { setDone(true); }
      else { setCurrent((c) => c + 1); setSelected(null); }
    }, 900);
  };

  const restart = () => { setCurrent(0); setSelected(null); setScore(0); setDone(false); };

  if (done) return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
      <div className="text-6xl mb-4">{score >= 6 ? "🏆" : score >= 4 ? "🌟" : "💪"}</div>
      <div className="text-2xl font-bold font-spaceGrotesk">{score}/{quizPool.length} correct</div>
      <div className="text-muted mt-2">{score >= 6 ? "You're practically a local!" : score >= 4 ? "Getting there!" : "Keep practicing!"}</div>
      <button onClick={restart} className="mt-6 bg-coral text-white rounded-full px-6 py-3 font-semibold hover:bg-sunset transition">Try Again</button>
    </motion.div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-muted">Question {current + 1} of {quizPool.length}</div>
        <div className="text-sm font-bold text-palm">Score: {score}</div>
      </div>
      <div className="h-1.5 bg-border rounded-full mb-6 overflow-hidden">
        <motion.div animate={{ width: `${((current + 1) / quizPool.length) * 100}%` }} className="h-full bg-gradient-to-r from-sunset to-coral" />
      </div>
      <div className="text-center mb-6">
        <div className="text-xs text-muted uppercase tracking-widest mb-2">What does this mean?</div>
        <div className="text-3xl font-bold gradient-text font-spaceGrotesk">{q.local}</div>
        <div className="text-sm text-muted italic mt-1">/{q.phonetic}/</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => {
          let bg = "bg-white border-border hover:border-coral hover:bg-coral/5";
          if (selected) {
            if (opt === q.english) bg = "bg-palm/15 border-palm text-palm font-bold";
            else if (opt === selected) bg = "bg-red/15 border-red text-red";
            else bg = "bg-white border-border opacity-50";
          }
          return (
            <button key={opt} onClick={() => choose(opt)} className={`p-3 rounded-xl border text-sm text-left transition-all ${bg}`}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function LanguagePage() {
  const [dest, setDest] = useState("Croatia");
  const [cat, setCat] = useState("Greetings");
  const pack = languagePacks[dest];
  const filtered = pack.phrases.filter((p) => p.category === cat);
  const availableCats = categories.filter((c) => pack.phrases.some((p) => p.category === c));

  return (
    <div className="pt-12 pb-24">
      {/* Hero */}
      <div className="relative overflow-hidden pb-16" style={{ background: "linear-gradient(135deg, #FEF3C7, #FFF8EC)" }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #FBBF24, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/30 text-ocean rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            🗣️ Language Learner
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-spaceGrotesk mb-4">
            Speak Like a <span className="gradient-text">Local</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-xl mx-auto">
            10 phrases that unlock a destination. Tap a card to reveal the pronunciation tip.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6">
        {/* Destination selector */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-4 mb-8">
          <div className="text-xs text-muted uppercase tracking-widest mb-3">Choose destination</div>
          <div className="flex flex-wrap gap-2">
            {destinations.map((d) => (
              <button key={d} onClick={() => { setDest(d); setCat("Greetings"); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${dest === d ? "bg-coral text-white border-coral shadow-sm" : "bg-bg border-border text-muted hover:border-coral hover:text-coral"}`}>
                <span>{languagePacks[d].flag}</span> {d}
              </button>
            ))}
          </div>
        </div>

        {/* Language header */}
        <AnimatePresence mode="wait">
          <motion.div key={dest} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{pack.flag}</span>
              <div>
                <div className="text-xl font-bold font-spaceGrotesk">{dest}</div>
                <div className="text-sm text-muted">Language: {pack.language}</div>
              </div>
            </div>

            {/* Category tabs */}
            <div className="flex gap-1 border-b border-border mb-6 overflow-x-auto">
              {availableCats.map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  className={`px-4 py-2.5 text-sm whitespace-nowrap relative transition-colors ${cat === c ? "text-coral font-semibold" : "text-muted hover:text-text"}`}>
                  {c}
                  {cat === c && <motion.div layoutId="lang-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral" />}
                </button>
              ))}
            </div>

            {/* Phrase cards */}
            <AnimatePresence mode="wait">
              <motion.div key={cat} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {filtered.map((p, i) => (
                    <motion.div key={p.local} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                      <PhraseCard phrase={p} />
                    </motion.div>
                  ))}
                  {filtered.length === 0 && <div className="text-muted text-sm col-span-3">No phrases in this category yet.</div>}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quiz section */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
              <div className="text-xs text-muted uppercase tracking-widest mb-1">Quick Quiz</div>
              <h3 className="text-xl font-bold font-spaceGrotesk mb-6">
                Test your {pack.language} 🎯
              </h3>
              <QuizSection key={dest} phrases={pack.phrases} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
