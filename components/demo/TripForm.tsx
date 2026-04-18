"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

interface Props { onGenerate: () => void; }
const cities = ["Rome", "Tokyo", "Bali", "Paris", "New York"];
const styles = ["Budget", "Comfort", "Luxury"];

export default function TripForm({ onGenerate }: Props) {
  const [destination, setDestination] = useState("Rome");
  const [showCities, setShowCities] = useState(false);
  const [startDate, setStartDate] = useState("2026-06-14");
  const [endDate, setEndDate] = useState("2026-06-21");
  const [budgetValue, setBudgetValue] = useState(2000);
  const [travelers, setTravelers] = useState(2);
  const [style, setStyle] = useState("Comfort");

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <h1 className="text-4xl md:text-5xl font-bold font-spaceGrotesk text-center mb-3">
        Plan Your Trip <span className="gradient-text">with AI</span>
      </h1>
      <p className="text-center text-muted mb-10">Tell us the basics. We do the rest. ✈️</p>

      <form onSubmit={(e)=>{e.preventDefault();onGenerate();}} className="space-y-6 bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
        <div>
          <label className="text-sm text-muted block mb-2 font-medium">Destination</label>
          <div className="relative">
            <input value={destination} onChange={(e)=>setDestination(e.target.value)}
              onFocus={()=>setShowCities(true)} onBlur={()=>setTimeout(()=>setShowCities(false),150)}
              className="w-full" placeholder="Where to? 🌍" />
            <AnimatePresence>
              {showCities && (
                <motion.div initial={{ opacity:0, y:-6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-6 }}
                  className="absolute z-10 mt-2 flex flex-wrap gap-2 bg-white border border-border rounded-xl p-3 w-full shadow-lg">
                  {cities.map(c=>(
                    <button key={c} type="button" onMouseDown={()=>{setDestination(c);setShowCities(false);}}
                      className="px-3 py-1.5 rounded-full bg-bg border border-border text-sm hover:border-coral hover:text-coral hover:bg-coral/5 transition-colors">
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted block mb-2 font-medium">Start date</label>
            <input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} className="w-full" />
          </div>
          <div>
            <label className="text-sm text-muted block mb-2 font-medium">End date</label>
            <input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)} className="w-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-muted font-medium">Budget</label>
            <div className="text-sm text-coral font-bold">${budgetValue.toLocaleString()}</div>
          </div>
          <input type="range" min={500} max={10000} step={100} value={budgetValue}
            onChange={e=>setBudgetValue(parseInt(e.target.value))}
            style={{ background: `linear-gradient(to right, #FF6B6B 0%, #FF8C42 ${((budgetValue-500)/9500)*100}%, #FDE68A ${((budgetValue-500)/9500)*100}%)` }} />
          <div className="flex justify-between text-xs text-muted mt-1"><span>$500</span><span>$10,000</span></div>
        </div>

        <div>
          <label className="text-sm text-muted block mb-2 font-medium">Travelers</label>
          <div className="flex items-center gap-4">
            <button type="button" onClick={()=>setTravelers(n=>Math.max(1,n-1))}
              className="w-10 h-10 rounded-full bg-bg border border-border hover:border-coral hover:text-coral transition-colors text-xl font-bold">−</button>
            <div className="text-3xl font-bold font-spaceGrotesk w-10 text-center text-text">{travelers}</div>
            <button type="button" onClick={()=>setTravelers(n=>Math.min(10,n+1))}
              className="w-10 h-10 rounded-full bg-bg border border-border hover:border-coral hover:text-coral transition-colors text-xl font-bold">+</button>
          </div>
        </div>

        <div>
          <label className="text-sm text-muted block mb-2 font-medium">Travel style</label>
          <div className="flex gap-2 flex-wrap">
            {styles.map(s=>(
              <button key={s} type="button" onClick={()=>setStyle(s)}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${style===s ? "bg-coral text-white border-coral shadow-sm" : "bg-bg border-border text-muted hover:text-text hover:border-coral"}`}>
                {s==="Budget"?"🎒":s==="Comfort"?"🛋️":"✨"} {s}
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" variant="primary" className="w-full">Generate My Trip ✨</Button>
      </form>
    </div>
  );
}
