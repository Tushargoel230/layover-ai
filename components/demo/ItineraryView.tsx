"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/ui/Card";
import { days } from "@/lib/data";

const icons: Record<string, string> = {
  morning: "☀️",
  afternoon: "🏛️",
  evening: "🌙",
};

export default function ItineraryView() {
  const [open, setOpen] = useState<number[]>([1]);

  const toggle = (d: number) =>
    setOpen((o) => (o.includes(d) ? o.filter((x) => x !== d) : [...o, d]));

  return (
    <div className="space-y-4">
      {days.map((d) => {
        const isOpen = open.includes(d.day);
        const total = d.activities.reduce((s, a) => s + a.cost, 0);
        return (
          <Card key={d.day} className="p-5">
            <button onClick={() => toggle(d.day)} className="w-full flex items-center justify-between text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center font-bold">
                  {d.day}
                </div>
                <div>
                  <div className="font-bold font-spaceGrotesk text-lg">{d.title}</div>
                  <div className="text-xs text-muted">{d.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-purpleLight text-sm">${total}</div>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>▾</motion.span>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-2">
                    {d.activities.map((a) => (
                      <div key={a.time} className="flex items-center justify-between p-3 bg-bg rounded-xl">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{icons[a.time]}</span>
                          <div>
                            <div className="text-sm">{a.label}</div>
                            <div className="text-xs text-muted capitalize">{a.time}</div>
                          </div>
                        </div>
                        <div className="text-purpleLight text-sm">${a.cost}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
}
