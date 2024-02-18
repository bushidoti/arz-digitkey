/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
         backgroundImage: {
        'us': "url('/src/assets/US.svg')",
        'eu': "url('/src/assets/Europe.svg')",
        'uk': "url('/src/assets/UK.svg')",
        'tr': "url('/src/assets/TR.svg')",
        'coin': "url('/src/assets/coin.png')",
        'gold': "url('/src/assets/gold.png')",
      }
    },
  },
  plugins: [],
}