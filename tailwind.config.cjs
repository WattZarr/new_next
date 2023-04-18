/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      'asap': ['Asap Condensed', 'sans-serif'],
      'asap-normal': [ 'Asap', 'sans-serif']

    },
    extend: {
      colors: {
        "dark-blue": "#1b3659" , 
        "dark-green": "#118c80",
        "light-green": "#17a67d"
      },
    },
  },
  plugins: [],
}