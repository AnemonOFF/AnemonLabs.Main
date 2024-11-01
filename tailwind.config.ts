import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import twTypography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  plugins: [nextui(), twTypography],
};
export default config;
