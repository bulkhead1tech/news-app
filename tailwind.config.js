/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{'glass': 'rgba(0 , 0, 0, 0.15)',
        'glassgo': 'rgba(0 , 0, 0, 0.20)'},
      backgroundImage: { 
        'myback': "url('C:/Users/user/Desktop/news/quiz/src/assets/4.jpg')",
        boxShadow: {
          'bottom': 'box-shadow: 0 8px 32px 0 rgba( 235, 235, 235, 0.37 )',
        },

     }
  },
  plugins: [],
}}

