"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px"
      }
    },
    screens: {
      xl: {
        max: "1279px"
      },
      lg: {
        max: "1023px"
      },
      md: {
        max: "767px"
      },
      sm: {
        max: "639px"
      },
      xs: {
        max: "375px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Roboto"].concat(_toConsumableArray(defaultTheme.fontFamily.sans))
      },
      display: ["group-hover"],
      colors: {
        white: "#FFFFFF",
        blackCustom: "#101011",
        grey: "#A8A8A8",
        greyDark: "#323130",
        error: "#ff0033",
        success: "#74B72E"
      }
    }
  },
  plugins: []
};