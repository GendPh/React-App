/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#151821",
        "light-blue": "#D0D6F9",
      },
      fontFamily: {
        "barlow-condensed": ['Barlow Condensed', "sans-serif"],

        "bellefair": ['Bellefair', "serif"],
      }
    },
  },
  plugins: [],
}