/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-hole': "url('./src/assets/bg-dark-hole.jpg')",
      }
    },
  },
  plugins: [],
}
