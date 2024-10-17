/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      gridTemplateColumns: {
        21: ["repeat(2,1fr)"],
      },
    },
  },
  plugins: [],
};
