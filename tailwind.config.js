/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/homepage/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "background": "#FFEEE3",
        "light-green": "#8ba887",
        "dark-green": "#34492C",
        "blue-highlight": "#c2c2e2"
      }
    },
  },
  plugins: [],
}
