/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      'fondo':"url('./src/components/PaginaInicio/assets/fondo.png')",
    },
    extend: {
      fontSize:{
        '22': '22px',
      },
      colors:{
        'color-principal': '#22c55e',
        'color-secundario': '#15803d',
        'gris': '#6b7280'
      }
    },
  },
  plugins: [],
}