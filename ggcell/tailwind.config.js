/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Bebas Neue', 'serif'],
        menu: ['Poppins', 'sans-serif'],
      },
      // Adicione outras personalizações, se necessário
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Adiciona o plugin tailwind-scrollbar
  ],
}
