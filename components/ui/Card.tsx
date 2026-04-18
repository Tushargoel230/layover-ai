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
  children,
  className = "",
  color = "#7C3AED",
  hover = true,
  ...rest
}: Props) {
  const gradient = `linear-gradient(135deg, ${color}99, #EC489966, #0EA5E966)`;
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`relative rounded-2xl ${className}`}
      style={{ background: "#0C0C1C" }}
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl p-[1px]"
        style={{
          background: gradient,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
