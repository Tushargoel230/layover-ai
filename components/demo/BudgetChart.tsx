"use client";
import { motion } from "framer-motion";
import { budget } from "@/lib/data";

export default function BudgetChart() {
  const total = budget.reduce((s, b) => s + b.amount, 0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
      <div className="relative">
        <svg width={220} height={220} viewBox="0 0 220 220">
          <g transform="rotate(-90 110 110)">
            {budget.map((b) => {
              const pct = b.amount / total;
              const dash = circumference * pct;
              const el = (
                <motion.circle
                  key={b.name}
                  cx={110}
                  cy={110}
                  r={radius}
                  fill="transparent"
                  stroke={b.color}
                  strokeWidth={40}
                  strokeDasharray={`${dash} ${circumference}`}
                  strokeDashoffset={-offset}
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={{ strokeDasharray: `${dash} ${circumference}` }}
                  transition={{ duration: 1, delay: offset / circumference }}
                />
              );
              offset += dash;
              return el;
            })}
          </g>
          <text x="110" y="104" textAnchor="middle" className="fill-text font-bold" style={{ fontSize: 14 }}>
            Total
          </text>
          <text x="110" y="128" textAnchor="middle" className="fill-text font-bold" style={{ fontSize: 22 }}>
            ${total}
          </text>
        </svg>
      </div>
      <div className="flex-1 w-full max-w-md space-y-3">
        {budget.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full" style={{ background: b.color }} />
            <div className="flex-1">
              <div className="flex justify-between text-sm">
                <span>{b.name}</span>
                <span className="text-muted">${b.amount} · {Math.round((b.amount / total) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-border rounded-full mt-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(b.amount / total) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: b.color }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
