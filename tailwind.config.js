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
      height: {
        "screen-1/2": "50vh",
        "screen-1/3": "33vh",
        "screen-1/4": "25vh",
        "screen-3/4": "75vh",
      },
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
      },
      animation: {
        fade: 'fadeIn linear 0.3s'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};