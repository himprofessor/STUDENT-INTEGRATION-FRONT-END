/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./publick/index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        '001': '#79c0DB',
        '002': '#CC6600',
        '003': '#009DE1',
        '004': '#FF9933',
      },
      fontFamily: {
        'nunito': ['sans-serif, "Times New Roman", Times, serif'],
        'my-text': ['"Open Sans", Arial, sans-serif'] 
      },
      colors:{
        'textA':'#009DE1'
      }
    },
  },
  plugins: [],
}

