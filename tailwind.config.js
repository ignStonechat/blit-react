/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
        },
        primary: {
          400: "#B692F6",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
        },
        error: {
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
        },
      },
    },
  },
  plugins: [],
};
