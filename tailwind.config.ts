import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-deep": "#0a0a0f",
        "bg-surface": "#111118",
        "bg-card": "#16161f",
        accent: "#c9a96e",
        "accent-dim": "rgba(201,169,110,0.15)",
        "text-primary": "#f0ede8",
        "text-secondary": "rgba(240,237,232,0.55)",
        "text-muted": "rgba(240,237,232,0.3)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      animation: {
        "pulse-slow": "pulse 8s ease-in-out infinite",
        bounce3d: "bounce3d 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        bounce3d: {
          "0%, 100%": { transform: "rotate(45deg) translateY(0)" },
          "50%": { transform: "rotate(45deg) translateY(8px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
