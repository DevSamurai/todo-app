/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter",
    },
    extend: {
      colors: {
        "royal-blue": "#0961fb",
        seasalt: "#F9F8F8",
        silver: "#B2B2B3",
        lavender: "#E2EAFB",
        "white-smoke": "#F1F0F0",
        black: "#212121",
      },
    },
  },
  plugins: [],
};
