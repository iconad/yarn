/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./products.html",
    "./pricing.html",
    "./login.html",
    "./demo.html",
    "./blog.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A72668',
        'theme-red': '#D80046',
        'theme-orange': '#EB7836',
        'theme-maroon': '#BC1F5F',
        'theme-purple': '#834483',
        'theme-yellow': '#ED9E2F',
        'theme-black': '#1A1A1A',
        'theme-gray': '#F2F2F2',
        'theme-gray-1': '#6060600f',
        'theme-dark-gray': '#CCCCCC',
      },
      screens: {
        '3xl': '1800px',
        'se': '380px',
      },
      fontFamily: {
        'cairo': 'Cairo',
        'visby-normal': 'Visby CF',
        'visby-bold': 'Visby CF Extra',
        'visby-semibold': 'Visby CF Demi',
      },
    },
  },
  plugins: [],
}
