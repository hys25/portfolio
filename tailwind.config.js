const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "375px" },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      display: ["group-hover"],
      colors: {
        white: "#FFFFFF",
        blackCustom: "#171717",
        grey: "#A8A8A8",
        greyDark: "#323130",
        greyLight: "#e0dede",
        error: "#ff0033",
        success: "#74B72E",
      },
    },
  },
  plugins: [],
}
