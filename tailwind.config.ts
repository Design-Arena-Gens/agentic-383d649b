import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EDF7FF",
          100: "#D7ECFF",
          200: "#AFD8FF",
          300: "#7ABEFF",
          400: "#439FFF",
          500: "#197EFF",
          600: "#0F60DB",
          700: "#0D49AA",
          800: "#0E3C87",
          900: "#0D326F"
        }
      },
      fontFamily: {
        display: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glow: "0 12px 40px rgba(25, 126, 255, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
