/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules//@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules//@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  darkMode: "class",
});
