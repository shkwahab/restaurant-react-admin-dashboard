/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"",
        secondary:"#969BA0",
        buttonPrimary:"#EA7A9A",

      },
      fontFamily: {
        primary: "Poppins, sans-serif",
        secondary: ""
      },
      backgroundImage: {
        'feature-cardbg': "url('/src/assets/img/cardBg.png')",
        
      },
    },
  },
  plugins: [],
}