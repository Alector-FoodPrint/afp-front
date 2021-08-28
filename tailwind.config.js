module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        foodprint: {
          50: "#F3F6F9",
          70: "#E6E3F2",
          100: "#7A7979",
          300: "#A8BBCD",
          700: "#507396",
          800: "#143B62"
        }
      }
    },

    variants: {
      extend: {}
    }
  },
  plugins: []
}
