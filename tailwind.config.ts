import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
        sm: "320px",
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
      fontFamily: {
        "desktop-h2":      "var(--desktop-h2-font-family)",
        "desktop-h3":      "var(--desktop-h3-font-family)",
        "desktop-text":    "var(--desktop-text-font-family)",
        "desktop-button":  "var(--desktop-button-font-family)",
        "desktop-caption": "var(--desktop-caption-font-family)",
      },
    },
  },
  plugins: [],
} satisfies Config;