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
        '#79C0DB': '#79c0DB',
        '#CC6600': '#CC6600',
        '#009DE1': '#009DE1',
        '#FF9933': '#FF9933',
      },
      fontFamily: {
        'nunito': ['sans-serif, "Times New Roman", Times, serif'],
        'MyFont': ['"My Font"', 'serif'] 
      },
    },
  },
  plugins: [],
}

