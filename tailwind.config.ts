import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070708",
          900: "#0a0a0b",
          850: "#0f1012",
          800: "#121316",
          750: "#16181c",
          700: "#1c1f24",
          600: "#23272e",
          500: "#2c313a",
        },
        silver: {
          50: "#f7f8f9",
          100: "#eceef0",
          200: "#dadde1",
          300: "#c7ccd1",
          400: "#a7adb5",
          500: "#8a9099",
          600: "#6b7178",
          700: "#4e535a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "silver-sheen":
          "linear-gradient(135deg, #f7f8f9 0%, #c7ccd1 28%, #8a9099 52%, #dadde1 74%, #6b7178 100%)",
        "ink-fade":
          "linear-gradient(180deg, rgba(10,10,11,0) 0%, rgba(10,10,11,0.7) 60%, #0a0a0b 100%)",
        "radial-spot":
          "radial-gradient(60% 60% at 50% 0%, rgba(167,173,181,0.14) 0%, rgba(10,10,11,0) 70%)",
      },
      boxShadow: {
        glass: "0 8px 40px rgba(0,0,0,0.45)",
        "glass-lg": "0 20px 70px rgba(0,0,0,0.55)",
        "silver-glow": "0 0 0 1px rgba(199,204,209,0.18), 0 14px 50px rgba(0,0,0,0.5)",
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.28em",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        shimmer: "shimmer 2.4s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "spin-slow": "spin-slow 1.1s linear infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
