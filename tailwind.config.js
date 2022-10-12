/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-blue": "#5995ef",
        "gradient-purple": "#625b94",
      },
      screens: {
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
      },
      maxWidth: {
        "2xs": "300px",
        "3xs": "280px",
      },
      minWidth: {
        "2xs": "300px",
        "3xs": "240px",
        "4xs": "200px",
      },
      fontFamily: {
        // sans: ["Oswald"],
        mont: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        hindi7xl: "4.7rem",
        hindi4xl: "2.7rem",
      },
    },
  },
  plugins: [],
};
