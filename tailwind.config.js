/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Manrope"],
      },
      width: {
        '0.9': '0.9rem', // Custom width value
      },
      colors: {
        customBlackText: '#878680',
        customGreen: "#156C07",
        customPinkbg: '#D9D9D9',
        customGreen2: '#4BAF47',
      },
      lineHeight: {
        '60': '60px', // Custom line height value
      },
    },
  },
  plugins: [],
}
