/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins, Sans-serif"],
    },
    extend: {
      colors: {
        "primary-color-black": "rgb(27, 38, 44)",
        "secondary-color-navy": "rgb(15, 76, 117)",
        "accent-color-blue": "rgb(50, 130, 184)",
        "accent-color-winter": "rgb(187, 225, 250)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
