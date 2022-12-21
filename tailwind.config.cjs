/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2B2B",
        secondary: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
