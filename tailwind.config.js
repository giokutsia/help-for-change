/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '5px 4px 4px rgba(19, 167, 96, 0.75)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#13A760',
        secondary: '#00ff00',
      },
      fontFamily: {
        pac: ['Pacifico', 'cursive'],
        
      },
    },
  },
  plugins: [],
}

