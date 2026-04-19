"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";
import WeatherWidget from "@/components/trips/WeatherWidget";
import { featuredTrips } from "@/lib/data";

const timeIcons: Record<string, string> = { morning: "", afternoon: "", evening: "" };

export default function TripsPage() {
  const [openDays, setOpenDays] = useState<Record<string, number[]>>({
    barcelona: [1], paris: [1], amsterdam: [1],
  });

  const toggleDay = (tripId: string, day: number) => {
    setOpenDays((prev) => {
      const cur = prev[tripId] ?? [];
      return { ...prev, [tripId]: cur.includes(day) ? cur.filter((d) => d !== day) : [...cur, day] };
    });
  };

  return (
    <div className="pt-12 pb-24">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #EBF6F7, #F4FAFB)" }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #14B8C4, transparent 70%)" }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Handpicked Trips
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold font-spaceGrotesk mb-4">
            Explore <span className="gradient-text-teal">Curated Trips</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted text-lg max-w-xl mx-auto mb-8">
            Full day-by-day itineraries, live weather, and real price ranges. One click to make any trip your own.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted">
            <span className="bg-white border border-border rounded-full px-3 py-1 shadow-sm">Barcelona</span>
            <span className="bg-white border border-border rounded-full px-3 py-1 shadow-sm">Paris</span>
            <span className="bg-white border border-border rounded-full px-3 py-1 shadow-sm">Amsterdam</span>
          </div>
        </div>
      </div>

      {/* Trip cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16 space-y-12">
        {featuredTrips.map((trip, idx) => {
          const totalCost = trip.itinerary.flatMap((d) => d.activities).reduce((s, a) => s + a.cost, 0);
          return (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl overflow-hidden bg-white shadow-lg border border-border"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img src={trip.img} alt={trip.destination} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="text-white text-3xl font-bold font-spaceGrotesk">{trip.destination}</div>
                  <div className="text-white/80 text-sm mt-1">{trip.country}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-sm font-bold text-text">
                    {trip.rating}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Stats row */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">{trip.dates}</span>
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-bold">${trip.price.min}–${trip.price.max}</span>
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">{trip.days} days</span>
                  <span className="bg-palm/10 text-palm text-sm px-3 py-1 rounded-full">{trip.travelers} travelers</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {trip.tags.map((t) => (
                    <span key={t} className="text-xs bg-bg border border-border rounded-full px-2.5 py-1 text-muted capitalize">{t}</span>
                  ))}
                </div>

                {/* Live weather */}
                <div className="mb-6">
                  <div className="text-xs text-muted uppercase tracking-widest mb-2">Live Weather in {trip.weatherCity}</div>
                  <WeatherWidget city={trip.weatherCity} />
                </div>

                {/* Itinerary accordion */}
                <div className="mb-6">
                  <div className="text-sm font-bold text-text mb-3">Day-by-Day Itinerary</div>
                  <div className="space-y-2">
                    {trip.itinerary.map((d) => {
                      const isOpen = (openDays[trip.id] ?? []).includes(d.day);
                      const dayTotal = d.activities.reduce((s, a) => s + a.cost, 0);
                      return (
                        <div key={d.day} className="border border-border rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleDay(trip.id, d.day)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-bg/50 transition"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                                style={{ background: "linear-gradient(135deg, #0A7075, #14B8C4)" }}>
                                {d.day}
                              </div>
                              <span className="font-semibold text-sm">{d.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-primary text-sm font-bold">${dayTotal}</span>
                              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-muted">▾</motion.span>
                            </div>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 pb-3 space-y-2">
                                  {d.activities.map((a) => (
                                    <div key={a.time} className="flex items-center justify-between text-sm p-2.5 bg-bg rounded-lg">
                                      <div className="flex items-center gap-2">
                                        <span>{timeIcons[a.time] ?? "📍"}</span>
                                        <div>
                                          <div>{a.label}</div>
                                          <div className="text-xs text-muted capitalize">{a.time}</div>
                                        </div>
                                      </div>
                                      <span className={a.cost === 0 ? "text-palm text-xs font-bold" : "text-primary text-sm font-bold"}>
                                        {a.cost === 0 ? "Free" : `$${a.cost}`}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 text-right text-sm text-muted">
                    Estimated activity cost: <span className="text-primary font-bold">${totalCost}</span> (flights + hotels separate)
                  </div>
                </div>

                <Button href="/demo" variant="primary" className="w-full">Plan a Trip Like This ✈️</Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
