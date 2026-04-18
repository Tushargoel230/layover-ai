import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#04040E",
        card: "#0C0C1C",
        border: "#1A1A32",
        purple: "#7C3AED",
        purpleLight: "#A78BFA",
        pink: "#EC4899",
        teal: "#0EA5E9",
        green: "#10B981",
        orange: "#F59E0B",
        red: "#EF4444",
        text: "#E4E4FF",
        muted: "#5A5A80",
      },
      fontFamily: {
        spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
