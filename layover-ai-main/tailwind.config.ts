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
        /* Backgrounds */
        bg: "#F4FAFB",
        card: "#FFFFFF",
        border: "#CBE8EC",
        /* Brand — deep ocean teal */
        primary: "#0A7075",
        primaryDark: "#094A4D",
        primaryLight: "#14B8C4",
        /* Warm accent */
        coral: "#FF6B6B",
        sunset: "#FF8C42",
        /* Extras */
        ocean: "#06B6D4",
        sky: "#0EA5E9",
        palm: "#10B981",
        sunshine: "#FBBF24",
        pink: "#EC4899",
        purple: "#A78BFA",
        red: "#EF4444",
        green: "#10B981",
        orange: "#F59E0B",
        /* Type */
        text: "#094A4D",
        muted: "#4D7B80",
        /* Legacy aliases (used throughout existing pages) */
        deepTeal: "#0A7075",
        oceanDark: "#094A4D",
        teal: "#0EA5E9",
        purpleLight: "#A78BFA",
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
