/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13A760',
        secondary: '#00ff00',
      },
      fontFamily: {
        pac: ['Pacifico', 'cursive'],
        serif: ['Bungee Spice', 'cursive'],
      },
    },
  },
  plugins: [],
}

