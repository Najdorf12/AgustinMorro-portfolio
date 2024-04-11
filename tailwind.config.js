/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title':["Michroma","sans-serif"],
        'title2': ["Oxanium","sans-serif"],
        'text': ["Encode Sans Expanded", "sans-serif"],
        'test':["MuseoModerno", "sans-serif"]
      }
    }
  },
  plugins: [],
}

