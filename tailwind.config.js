const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background1: '#222222',
        background2: '#444444',
        background3:'#282828',
        textColor1: '#FFFFFF',
        textColor2: '#D5D5D5',
        textColor3: '#F5F5F5',
        accentColor: '#007ced',

      },
      fontFamily: {
        sans: [
          'Poppins',
          'Helvetica',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      maxWidth:{
        maxContentWid : '1320px',
        maxHeroWid : '1056px'
      }
    },
  },
  plugins: [],
};


// textColor2: '#D5D5D5',
// textColor3: '#F5F5F5',


// textColor2: '#858585',
// textColor3: '#686868'