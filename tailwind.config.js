/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-principal': '#22c55e',
        'gris': '#5b615b'
      }
    },
  },
  plugins: [],
}