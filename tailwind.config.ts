import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2968B2",
          navy: "#1A3A5C",
          navyDeep: "#0F2440",
          navyLight: "#2A5580",
          ice: "#F0F4F8",
          iceWarm: "#F7F9FB",
          gray100: "#E8ECF1",
          gray200: "#D0D7E0",
          gray400: "#8A97A8",
          gray500: "#6B7B8D",
          gray600: "#4A5A6B",
        },
        sf: {
          wachstum: "#2968B2",
          stabilitaet: "#374F6B",
          erneuerung: "#48A5D1",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
