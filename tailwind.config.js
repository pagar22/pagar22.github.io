/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
};
