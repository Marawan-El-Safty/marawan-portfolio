import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens — driven by CSS variables (see globals.css).
        paper: "rgb(var(--paper) / <alpha-value>)", // page background
        ink: "rgb(var(--ink) / <alpha-value>)", // primary text & solid buttons
        surface: "rgb(var(--surface) / <alpha-value>)", // cards
        line: "rgb(var(--line) / <alpha-value>)", // borders
        accent: "#6d49ff", // violet — readable on both themes
        accent2: "#a78bfa", // soft violet
        lime: "#a6d608", // accent fill / dot
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
