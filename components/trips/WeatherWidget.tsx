"use client";
import { useEffect, useState } from "react";

interface WeatherData {
  temp: string;
  feelsLike: string;
  humidity: string;
  windSpeed: string;
  description: string;
  emoji: string;
}

const conditionEmojis: Record<number, string> = {
  113: "☀️", 116: "⛅", 119: "☁️", 122: "☁️",
  143: "🌫️", 176: "🌦️", 179: "🌨️", 182: "🌧️",
  185: "🌧️", 200: "⛈️", 227: "🌨️", 230: "❄️",
  248: "🌫️", 260: "🌫️", 263: "🌦️", 266: "🌧️",
  281: "🌧️", 284: "🌧️", 293: "🌦️", 296: "🌧️",
  299: "🌧️", 302: "🌧️", 305: "🌧️", 308: "🌧️",
  311: "🌧️", 314: "🌧️", 317: "🌨️", 320: "🌨️",
  323: "🌨️", 326: "🌨️", 329: "❄️", 332: "❄️",
  335: "❄️", 338: "❄️", 350: "🌧️", 353: "🌦️",
  356: "🌧️", 359: "🌧️", 362: "🌨️", 365: "🌨️",
  368: "🌨️", 371: "❄️", 374: "🌨️", 377: "🌨️",
  386: "⛈️", 389: "⛈️", 392: "⛈️", 395: "⛈️",
};

interface Props {
  city: string;
}

export default function WeatherWidget({ city }: Props) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`)
      .then((r) => r.json())
      .then((data) => {
        const cur = data.current_condition?.[0];
        if (!cur) throw new Error("no data");
        const code = parseInt(cur.weatherCode);
        setWeather({
          temp: cur.temp_C,
          feelsLike: cur.FeelsLikeC,
          humidity: cur.humidity,
          windSpeed: cur.windspeedKmph,
          description: cur.weatherDesc?.[0]?.value ?? "",
          emoji: conditionEmojis[code] ?? "🌤️",
        });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [city]);

  if (loading) return (
    <div className="flex items-center gap-2 text-sm text-muted animate-pulse p-3 bg-sunshine/10 rounded-xl">
      <span>🌤️</span> Loading weather for {city}...
    </div>
  );

  if (error) return (
    <div className="text-xs text-muted p-3 bg-border/30 rounded-xl">
      Weather unavailable right now
    </div>
  );

  if (!weather) return null;

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(6,182,212,0.1))" }}>
      <div className="text-3xl">{weather.emoji}</div>
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-text">{weather.temp}°C</span>
          <span className="text-xs text-muted">feels like {weather.feelsLike}°C</span>
        </div>
        <div className="text-xs text-muted">{weather.description} · 💧{weather.humidity}% · 💨{weather.windSpeed} km/h</div>
      </div>
      <div className="text-xs text-muted text-right">
        <div className="font-semibold text-ocean">{city}</div>
        <div>live</div>
      </div>
    </div>
  );
}
