/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{json,md}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};