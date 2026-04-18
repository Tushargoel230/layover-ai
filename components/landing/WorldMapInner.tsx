"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const FEATURED_COUNTRY_IDS = new Set([
  "250", // France
  "528", // Netherlands
  "276", // Germany
  "380", // Italy
  "392", // Japan
  "360", // Indonesia
  "462", // Maldives
  "840", // USA
  "191", // Croatia
]);

const destinations = [
  { name: "Paris", coords: [2.35, 48.85] as [number, number], emoji: "🇫🇷", price: "from $1,700", tag: "Romance & Art" },
  { name: "Amsterdam", coords: [4.9, 52.37] as [number, number], emoji: "🇳🇱", price: "from $1,100", tag: "Canals & Culture" },
  { name: "Berlin", coords: [13.4, 52.52] as [number, number], emoji: "🇩🇪", price: "from $1,000", tag: "History & Nightlife" },
  { name: "Rome", coords: [12.5, 41.9] as [number, number], emoji: "🇮🇹", price: "from $1,200", tag: "History & Food" },
  { name: "Tokyo", coords: [139.7, 35.7] as [number, number], emoji: "🇯🇵", price: "from $2,200", tag: "Tech & Tradition" },
  { name: "Bali", coords: [115.2, -8.3] as [number, number], emoji: "🇮🇩", price: "from $900", tag: "Temples & Beaches" },
  { name: "New York", coords: [-74.0, 40.7] as [number, number], emoji: "🇺🇸", price: "from $1,500", tag: "City & Culture" },
  { name: "Maldives", coords: [73.5, 3.2] as [number, number], emoji: "🇲🇻", price: "from $2,800", tag: "Luxury & Ocean" },
];

export default function WorldMapInner() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);

  const hoveredDest = destinations.find(d => d.name === hovered);

  return (
    <div className="relative select-none">
      <div className="relative rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{ scale: 155 }}
          style={{ width: "100%", height: "auto" }}
        >
          <ZoomableGroup zoom={1} center={[0, 20]}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isFeatured = FEATURED_COUNTRY_IDS.has(geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isFeatured ? "rgba(10,112,117,0.25)" : "#E8F4F5"}
                      stroke="#CBE8EC"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "rgba(10,112,117,0.35)", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {destinations.map((dest) => {
              const isActive = hovered === dest.name;
              return (
                <Marker
                  key={dest.name}
                  coordinates={dest.coords}
                  onMouseEnter={(e) => {
                    setHovered(dest.name);
                    const rect = (e.currentTarget as SVGElement)
                      .closest("svg")
                      ?.getBoundingClientRect();
                    if (rect) {
                      setTooltip({
                        x: (e as any).clientX - rect.left,
                        y: (e as any).clientY - rect.top,
                      });
                    }
                  }}
                  onMouseLeave={() => { setHovered(null); setTooltip(null); }}
                  onClick={() => router.push("/demo")}
                  style={{ cursor: "pointer" }}
                >
                  <motion.circle
                    r={isActive ? 7 : 5}
                    fill={isActive ? "#0A7075" : "#14B8C4"}
                    stroke="white"
                    strokeWidth={2}
                    style={{ transition: "r 0.2s, fill 0.2s" }}
                  />
                  {isActive && (
                    <motion.circle
                      r={12}
                      fill="none"
                      stroke="#0A7075"
                      strokeWidth={1.5}
                      opacity={0.4}
                      initial={{ r: 7, opacity: 0.6 }}
                      animate={{ r: 18, opacity: 0 }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Tooltip */}
        <AnimatePresence>
          {hoveredDest && tooltip && (
            <motion.div
              key={hoveredDest.name}
              initial={{ opacity: 0, scale: 0.9, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.12 }}
              className="absolute z-20 pointer-events-none"
              style={{
                left: Math.min(tooltip.x + 12, (typeof window !== "undefined" ? window.innerWidth : 800) - 200),
                top: Math.max(tooltip.y - 60, 8),
              }}
            >
              <div className="bg-white border border-border rounded-xl px-4 py-3 shadow-xl min-w-[160px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{hoveredDest.emoji}</span>
                  <span className="font-bold font-spaceGrotesk text-text text-sm">{hoveredDest.name}</span>
                </div>
                <div className="text-primary text-xs font-semibold">{hoveredDest.price}</div>
                <div className="text-muted text-xs mt-0.5">{hoveredDest.tag}</div>
                <div className="mt-2 text-xs text-primary font-medium">Click to plan →</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Destination pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {destinations.map((dest) => (
          <button
            key={dest.name}
            onMouseEnter={() => setHovered(dest.name)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => router.push("/demo")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all ${
              hovered === dest.name
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white border-border text-muted hover:border-primary hover:text-primary"
            }`}
          >
            <span className="text-base leading-none">{dest.emoji}</span>
            <span>{dest.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
