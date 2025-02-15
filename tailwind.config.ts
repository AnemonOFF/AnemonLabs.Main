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
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "gradient 6s ease-in infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), twTypography],
};
export default config;
