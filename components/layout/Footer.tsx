import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24" style={{ background: "linear-gradient(180deg, #EBF6F7, #F4FAFB)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3" style={{ fontFamily: "var(--font-dancing)", fontSize: "2rem", lineHeight: 1 }}>
              <span className="gradient-text-teal">Layover</span>
              <span className="text-base font-bold text-muted">.ai</span>
            </div>
            <p className="text-muted text-sm">The last travel app you'll ever need.</p>
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
          <div>© 2026 Layover.ai. All rights reserved.</div>
          <div>Made with ✈️ for travelers everywhere.</div>
        </div>
      </div>
    </footer>
  );
}
