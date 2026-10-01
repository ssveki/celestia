import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1920px",
    },
    extend: {
      colors: {
        black: "var(--black)",
        blue: "var(--blue)",
        "dark-gray": "var(--dark-gray)",
        gray: "var(--gray)",
        "gray-30": "var(--gray-30)",
        white: "var(--white)",
        "white-40": "var(--white-40)",
      },
    },
  },
  plugins: [],
} satisfies Config;