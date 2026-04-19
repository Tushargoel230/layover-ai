import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24" style={{ background: "linear-gradient(180deg, #EBF6F7, #F4FAFB)" }}>
      {/* CTA Banner */}
      <div className="border-b border-border" style={{ background: "linear-gradient(135deg, #094A4D, #0A7075)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="text-white/70 text-sm uppercase tracking-widest mb-3 font-semibold">Start your journey</p>
          <h2 className="text-3xl md:text-5xl font-bold font-spaceGrotesk text-white mb-6">
            Ready for your next <em className="not-italic" style={{ color: "#14B8C4" }}>adventure?</em>
          </h2>
          <Link href="/demo" className="inline-flex items-center gap-2 bg-white text-primary font-bold rounded-full px-8 py-3.5 hover:bg-white/90 transition-colors shadow-xl text-sm">
            Start planning — it&apos;s free
            <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">↗</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-end gap-0.5">
              <span className="font-spaceGrotesk font-black text-2xl text-primary tracking-tight">Atlas</span>
              <span className="text-xs font-bold text-muted pb-0.5">.ai</span>
            </div>
            <p className="text-muted text-sm">The all-in-one AI travel companion. Plan smarter, pack lighter, share louder.</p>
            <div className="flex items-center gap-3 mt-4 text-lg">
              {["🐦","📷","🎵","▶️"].map((e,i) => <a key={i} href="#" className="hover:scale-110 transition-transform">{e}</a>)}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3">Features</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/features" className="hover:text-primary">AI Budget Oracle</Link></li>
              <li><Link href="/features" className="hover:text-primary">Outfit Planner</Link></li>
              <li><Link href="/trips" className="hover:text-primary">Featured Trips</Link></li>
              <li><Link href="/language" className="hover:text-primary">Language Learner</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-sm text-muted flex flex-col sm:flex-row justify-between gap-2">
          <div>© 2026 Atlas.ai. All rights reserved.</div>
          <div>Made with ✈️ for travelers everywhere.</div>
        </div>
      </div>
    </footer>
  );
}
