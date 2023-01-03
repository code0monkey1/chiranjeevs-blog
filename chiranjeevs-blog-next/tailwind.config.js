/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#99edd6",
        "primary-dark":"#99edd6"
      }
      
    },
    fontFamily:{
      sans:['Roboto','sans-serif']
    }
  },
  plugins: [],
}
