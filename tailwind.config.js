/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,pdf}",
    "./components/**/*.{js,ts,jsx,tsx,pdf}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        nunito: ['Nunito']
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
