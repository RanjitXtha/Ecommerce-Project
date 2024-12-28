/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGrey:'#c5c9c8',
        customOrange:'#e9d1bd',
        textColor: '#2E2E2E',
        lightColor: '#616161',
        customWhite: '#F7F7F7',
        customBlue: '#cad5da',
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
      },
      screens:{
        customShop:'1130px'
      }
    },
  },
  plugins: [],
};

