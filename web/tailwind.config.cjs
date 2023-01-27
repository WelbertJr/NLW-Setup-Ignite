/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "#09090A",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
      screens: {
        sm: { max: "996px" },
        md: { max: "402px" },
        lg: { max: "1336px"},
      },
    },
  },
  plugins: [],
};
