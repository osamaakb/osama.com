/* eslint-disable */
module.exports = {
  purge: {
    content: ["./src/**/*.tsx", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        "sans": [
          "Mulish",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",]
      },
      colors: {
        primary: {
          "DEFAULT": "#000000"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};