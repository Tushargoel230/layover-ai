"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  name: string;
  emoji: string;
  earned: boolean;
  description?: string;
}

export default function Badge({ name, emoji, earned, description }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={earned ? { scale: 0, rotate: -20 } : { opacity: 0 }}
      animate={earned ? { scale: 1, rotate: 0 } : { opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative flex flex-col items-center gap-2 p-4 rounded-2xl cursor-default"
      style={{
        background: earned
          ? "linear-gradient(135deg, rgba(10,112,117,0.12), rgba(20,184,196,0.1))"
          : "rgba(203,232,236,0.3)",
        border: earned
          ? "1.5px solid rgba(10,112,117,0.45)"
          : "1.5px solid #CBE8EC",
        boxShadow: earned ? "0 0 24px -6px rgba(10,112,117,0.35)" : "none",
      }}
    >
      <div className={`text-4xl ${earned ? "" : "grayscale opacity-40"}`}>{emoji}</div>
      {!earned && <div className="absolute top-2 right-2 text-sm">🔒</div>}
      <div className={`text-sm font-medium text-center ${earned ? "text-text" : "text-muted"}`}>{name}</div>
      {hover && description && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white border border-border rounded-lg px-3 py-1.5 text-xs text-text whitespace-nowrap z-10 shadow-lg">
          {description}
        </div>
      )}
    </motion.div>
  );
}
