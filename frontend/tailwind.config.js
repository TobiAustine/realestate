/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#d6d6d6",
        secondary: "#7d7d7d",
        tertiary:'#292929',
        black:'#000000',
        purple:'#233253',
        lightPurple:'#4d547a',
        darkPurple:'#061836',
        red: '#9b2226'
      }
    },
  },
  plugins: [],
}