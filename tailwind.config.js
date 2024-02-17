/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
              "dark-blue":"#111827",
              "light-blue":"#1F2937",
              "white":"#FFFFFF"
              },
    },
  },
  plugins: [],
}

