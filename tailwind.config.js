/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.jsx", flowbite.content()],

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
  plugins: [flowbite.plugin()],
};
