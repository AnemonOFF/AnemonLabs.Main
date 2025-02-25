import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import twTypography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: ({ colors }) => ({
        gradient: {
          to: { "background-position": "200% center" },
        },
        moveTop: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-100%, 80vh)" },
          "50%": { transform: "translate(70vw, 60vh)" },
          "75%": { transform: "translate(50vw, 100px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        moveBottom: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(100px, -40vh)" },
          "50%": { transform: "translate(-70vw, -60vh)" },
          "75%": { transform: "translate(-80vw, -100%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        coloring: {
          "0%": { backgroundColor: colors.emerald[400] },
          "50%": { backgroundColor: colors.sky[400] },
          "100%": { backgroundColor: colors.purple[400] },
        },
      }),
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "gradient 6s ease-in infinite",
        "move-top": "moveTop 60s ease-in-out infinite",
        "move-bottom": "moveBottom 60s ease-in-out infinite",
        coloring: "coloring 10s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), twTypography],
};
export default config;
