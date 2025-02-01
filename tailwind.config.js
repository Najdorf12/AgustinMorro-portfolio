/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "420px",

      md: "650px",

      lg: "1000px",

      xl: "1360px",

      "2xl": "1650px",
    },
    extend: {
      fontFamily: {
        title: ["Michroma", "sans-serif"],
        title2: ["Oxanium", "sans-serif"],
        text: ["Encode Sans Expanded", "sans-serif"],
        text2: ["MuseoModerno", "sans-serif"],
      },
    },
  },
  plugins: [],
};
