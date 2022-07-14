/** @type {import('tailwindcss').Config} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/danieljliu.github.io/' : '',
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
