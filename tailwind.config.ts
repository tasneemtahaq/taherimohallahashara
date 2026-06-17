import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light:   "#E8D5A3",
          dark:    "#9A7A2E",
        },
        emerald: {
          deep:  "#0A3D2E",
          mid:   "#145A3C",
          light: "#1E7A50",
        },
        ink: {
          DEFAULT: "#0D0D0D",
          soft:    "#1A1A1A",
          mid:     "#111827",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":     "fadeUp 0.8s ease forwards",
        "fade-in":     "fadeIn 1s ease forwards",
        "float":       "float 6s ease-in-out infinite",
        "blob":        "blob 8s ease-in-out infinite",
        "shimmer":     "shimmer 2s linear infinite",
        "tear-fall":   "tearFall 2.5s ease-in forwards",
        "ripple":      "ripple 1s ease-out forwards",
        "zoom-reveal": "zoomReveal 2.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        blob: {
          "0%, 500%": { transform: "translate(0px, 0px) scale(1)" },
          "33%":      { transform: "translate(30px, -50px) scale(1.1)" },
          "66%":      { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        tearFall: {
          "0%":   { transform: "translateY(-100px)", opacity: "0" },
          "30%":  { opacity: "1" },
          "100%": { transform: "translateY(calc(50vh - 40px))", opacity: "1" },
        },
        ripple: {
          "0%":   { transform: "scale(0)", opacity: "0.8" },
          "100%": { transform: "scale(40)", opacity: "0" },
        },
        zoomReveal: {
          "0%":   { transform: "scale(1.3)", opacity: "0" },
          "100%": { transform: "scale(1)",   opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;