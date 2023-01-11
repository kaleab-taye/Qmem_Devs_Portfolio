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
        background1: '#f3f3f3',
        background2: '#e5e5e5',
        background3:'#fcfcfc',
        textColor1: '#333333',
        textColor2: '#666',
        textColor3: '#aaa',
        accentColor: '#54ca95',

        background1Dark: '#222222',
        background2Dark: '#444444',
        background3Dark:'#282828',
        textColor1Dark: '#FFFFFF',
        textColor2Dark: '#D5D5D5',
        textColor3Dark: '#333333',
        accentColorDark: '#007ced',
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