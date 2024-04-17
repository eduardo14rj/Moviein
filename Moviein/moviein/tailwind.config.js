/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Inter", "Arial", "sans-serif"]
    },
    colors: {
      "dark": "#191825",
      "white": "#fff",
      "redDark": "#D2043D",
      "primary": "#865DFF"
    },
    extend: {},
  },
  plugins: [],
}

