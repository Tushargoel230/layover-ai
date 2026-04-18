"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { influencerTrips } from "@/lib/data";

export default function InfluencerTrips() {
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-coral/10 border border-coral/30 text-coral rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            🔥 Trending on Layover.ai
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-spaceGrotesk">
            Book the exact trip your <span className="gradient-text">favorite creator</span> just took.
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Thousands of travelers copy influencer itineraries every week. One tap and it's yours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {influencerTrips.map((trip, i) => (
            <motion.div
              key={trip.user}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden bg-white"
              style={{ boxShadow: "0 8px 32px -8px rgba(255,107,107,0.2)", border: "1.5px solid #FDE68A" }}
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={trip.img}
                  alt={trip.destination}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Viral badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-2.5 py-1 text-xs font-bold text-text flex items-center gap-1">
                  🔥 {trip.views} views
                </div>
                {/* User avatar */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #FF8C42, #FF6B6B)" }}>
                    {trip.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">{trip.user}</div>
                    <div className="text-white/80 text-xs">{trip.followers} followers</div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold font-spaceGrotesk">{trip.destination}</h3>
                    <p className="text-sm text-muted">{trip.days} days · from ${trip.price.toLocaleString()}</p>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-bold text-palm">✓ {trip.copies.toLocaleString()}</div>
                    <div className="text-muted text-xs">copied this</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {trip.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-sunshine/20 text-sunset px-2 py-0.5 rounded-full capitalize">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setCopied(trip.user);
                    setTimeout(() => setCopied(null), 2000);
                  }}
                  className={`w-full py-2.5 rounded-full text-sm font-semibold transition-all ${
                    copied === trip.user
                      ? "bg-palm text-white"
                      : "bg-coral text-white hover:bg-sunset"
                  }`}
                >
                  {copied === trip.user ? "✓ Trip Copied!" : "Copy This Trip ✈️"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
