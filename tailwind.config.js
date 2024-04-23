/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'fondo': "url('./src/components/PaginaInicio/assets/fondo.png')",
    },
    extend: {
      width:{
        '55':'55%'
      },
      fontSize: {
        '22': '22px',
      },
      boxShadow: {
        custom: ' -23px 23px 13px -5px rgba(0, 0, 0, 0.49)',
      },
      colors: {
        'color-principal': '#22c55e',
        'color-secundario': '#15803d',
        'gris': '#6b7280'
      }
    },
  },
  plugins: [],
}