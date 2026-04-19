"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface Props extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  color?: string;
  hover?: boolean;
}

export default function Card({
  children, className = "", color = "#0A7075", hover = true, ...rest
}: Props) {
  const gradient = `linear-gradient(135deg, ${color}99, #14B8C466, #FF6B6B44)`;
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 16px 48px -8px rgba(10,112,117,0.18)" } : undefined}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`relative rounded-2xl bg-white ${className}`}
      style={{ boxShadow: "0 4px 24px -8px rgba(10,112,117,0.12)" }}
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl p-[1px]"
        style={{
          background: gradient,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
