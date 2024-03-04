/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#39DB4A",
        "secondry" : "#FF6868",
        "accent" : "#555555",
        "background" : "#fcfcfc",
      }
    },
  },
  plugins: [require("daisyui")],
}