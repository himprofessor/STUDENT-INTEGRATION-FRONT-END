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
        '#79C0DB': '#79C0DB',
        '#OO9DE1': '#OO9DE1',
        '#22BBEA': '#22BBEA',
        '#CC66OO': '#CC66OO',
        '#FF9933': '#FF9933',
      },
    },
  },
  plugins: [],
}

