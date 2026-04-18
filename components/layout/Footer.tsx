import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold font-spaceGrotesk gradient-text mb-3">
              Layover.ai
            </div>
            <p className="text-muted text-sm">
              The last travel app you'll ever need.
            </p>
            <div className="flex items-center gap-3 mt-4 text-lg">
              <a href="#" aria-label="Twitter" className="hover:text-purpleLight">🐦</a>
              <a href="#" aria-label="Instagram" className="hover:text-pink">📷</a>
              <a href="#" aria-label="TikTok" className="hover:text-teal">🎵</a>
              <a href="#" aria-label="YouTube" className="hover:text-red">▶️</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3 text-text">Features</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/features" className="hover:text-purpleLight">AI Budget Oracle</Link></li>
              <li><Link href="/features" className="hover:text-purpleLight">Outfit Planner</Link></li>
              <li><Link href="/features" className="hover:text-purpleLight">Events</Link></li>
              <li><Link href="/features" className="hover:text-purpleLight">Split Payments</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3 text-text">Company</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-purpleLight">About</a></li>
              <li><a href="#" className="hover:text-purpleLight">Careers</a></li>
              <li><a href="#" className="hover:text-purpleLight">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3 text-text">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-purpleLight">Privacy</a></li>
              <li><a href="#" className="hover:text-purpleLight">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-sm text-muted flex flex-col sm:flex-row justify-between gap-2">
          <div>© 2026 Layover.ai. All rights reserved.</div>
          <div>Made with ✈️ for travelers.</div>
        </div>
      </div>
    </footer>
  );
}
