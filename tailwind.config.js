/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.jsx", flowbite.content()],

  theme: {
    extend: {
      fontfamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      gridTemplateColumns: {
        21: ["repeat(2,1fr)"],
      },
      animation: {
        spin2: "spin 20s linear infinite ",
        ping2: "ping 20s linear infinite",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        ".overflow-hidden-top": {
          position: "relative",
          overflowY: "hidden",
          marginTop: "-1px",
        },
      });
    },
  ],
};
