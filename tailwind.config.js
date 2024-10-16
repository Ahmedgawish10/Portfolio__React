/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {         
       'sm': {'max': '500px'},

  }
    },
  },
  plugins: [],
}