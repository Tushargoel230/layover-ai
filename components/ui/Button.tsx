"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface Props {
  children: ReactNode;
  variant?: Variant;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-purple text-white hover:bg-purpleLight shadow-[0_0_32px_-8px_rgba(124,58,237,0.6)]",
  secondary:
    "bg-transparent border border-purple text-purpleLight hover:bg-purple/10",
  ghost: "bg-transparent text-muted hover:text-text",
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  type = "button",
  disabled,
}: Props) {
  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-full px-6 py-3 transition-colors ${styles[variant]} ${className}`;
  const content = <span>{children}</span>;
  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} className={base}>
          {content}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={base + (disabled ? " opacity-50 cursor-not-allowed" : "")}
    >
      {content}
    </motion.button>
  );
}
