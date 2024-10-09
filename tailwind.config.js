/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./views/**/*.ejs"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#E41B5F",
      },
    },
  },
  variants: {},
  plugins: [],
};
