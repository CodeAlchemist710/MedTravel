import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B7A57", // Forest green - main brand color
          dark: "#2C5545",
          light: "#5D9178",
        },
        secondary: {
          DEFAULT: "#4A90E2", // Ocean blue
          dark: "#2171C7",
          light: "#7DB1F0",
        },
        accent: {
          DEFAULT: "#F0B67F", // Sandy beige
          dark: "#E59B50",
          light: "#F8D3AD",
        },
        neutral: {
          DEFAULT: "#F5F5F5", // Light background
          dark: "#333333", // Text color
          light: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
