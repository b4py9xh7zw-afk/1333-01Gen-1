/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bank: {
          navy: "#0A1628",
          navyLight: "#132238",
          navyDark: "#060E1A",
          gold: "#C9A96E",
          goldLight: "#D4BA85",
          goldDark: "#B8975A",
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.4s ease-out forwards",
        "marquee": "marquee 20s linear infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(10, 22, 40, 0.08)",
        cardHover: "0 8px 32px rgba(10, 22, 40, 0.12)",
        glow: "0 0 0 4px rgba(201, 169, 110, 0.15)",
      },
    },
  },
  plugins: [],
};
