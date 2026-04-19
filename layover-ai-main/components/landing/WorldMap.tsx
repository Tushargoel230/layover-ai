"use client";
import dynamic from "next/dynamic";

const WorldMapInner = dynamic(() => import("./WorldMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-2xl border border-border bg-white shadow-sm overflow-hidden animate-pulse" style={{ paddingBottom: "52%" }}>
      <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">Loading map…</div>
    </div>
  ),
});

export default function WorldMap() {
  return <WorldMapInner />;
}
