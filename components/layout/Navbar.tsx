"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/trips", label: "Trips" },
  { href: "/features", label: "Features" },
  { href: "/language", label: "Language" },
  { href: "/achievements", label: "Achievements" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-xl shadow-sm border-b border-border"
      }`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 select-none">
            <span className={`font-spaceGrotesk font-black text-2xl tracking-tight ${transparent ? "text-white" : "text-primary"}`}>
              Atlas
            </span>
            <span className={`text-xs font-bold self-end pb-0.5 ${transparent ? "text-white/60" : "text-muted"}`}>
              .ai
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link href={l.href} className={`px-3 py-2 rounded-full text-sm transition-all font-medium ${
                    transparent
                      ? active ? "text-white bg-white/20" : "text-white/80 hover:text-white hover:bg-white/15"
                      : active ? "text-primary bg-primary/10 font-semibold" : "text-muted hover:text-text hover:bg-border/50"
                  }`}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link href="/demo" className={`hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold rounded-full px-5 py-2.5 transition-all ${
              transparent
                ? "bg-white text-text hover:bg-white/90 shadow-lg"
                : "bg-primary text-white hover:bg-primaryDark shadow-[0_4px_16px_-4px_rgba(10,112,117,0.5)]"
            }`}>
              Try Atlas ✈
            </Link>
            <button
              className={`lg:hidden p-2 rounded-xl border ${transparent ? "border-white/30 text-white" : "border-border bg-white/80 text-text"}`}
              onClick={() => setOpen(true)} aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed inset-0 z-50 flex flex-col p-6 lg:hidden"
            style={{ background: "linear-gradient(160deg, #094A4D, #0A7075)" }}
          >
            <div className="flex items-center justify-between mb-10">
              <span className="font-spaceGrotesk font-black text-2xl text-white tracking-tight">
                Atlas<span className="text-base font-bold text-white/60">.ai</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close"
                className="p-2 rounded-xl border border-white/20 text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {links.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <motion.li key={l.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                    <Link href={l.href} className={`block text-2xl font-spaceGrotesk font-bold py-3 px-4 rounded-xl transition-all ${
                      active ? "text-white bg-white/20" : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}>
                      {l.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className="mt-auto">
              <Link href="/demo" className="block w-full text-center bg-white text-primary font-bold rounded-full py-4 text-lg">
                Try Atlas ✈
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
