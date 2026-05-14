import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        "ph-black": "#080B12",
        "ph-dark": "#0E1014",
        "ph-azure11": "#151B24",
        "ph-azure9": "#10151D",
        "ph-azure7": "#0E1014",
        "ph-accent": "#F4B400",
        "ph-accent-border": "#E2A500",
        "ph-yellow-mid": "#FFC247",
        "ph-yellow-light": "#FFD772",
        "ph-yellow-pale": "#FFE7A3",
        "ph-brown": "#8E6000",
        "ph-pale-sky": "#697487",
        "ph-zircon": "#F9FBFF",
        "ph-catskill": "#F8FAFC",
      },
    },
  },
  safelist: [
    "text-ph-zircon/40", "text-ph-zircon/45", "text-ph-zircon/60",
    "text-ph-zircon/70", "text-ph-zircon/72", "text-ph-zircon/75",
    "text-ph-zircon/76", "text-ph-zircon/80",
    "dark:text-ph-zircon/40", "dark:text-ph-zircon/45", "dark:text-ph-zircon/60",
    "dark:text-ph-zircon/70", "dark:text-ph-zircon/72", "dark:text-ph-zircon/75",
    "dark:text-ph-zircon/76", "dark:text-ph-zircon/80",
  ],
  plugins: [],
};

export default config;
