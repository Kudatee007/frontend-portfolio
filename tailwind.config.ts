import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        accent: "#0aff9d",
      },
    },
  },
  plugins: [],
} satisfies Config;
