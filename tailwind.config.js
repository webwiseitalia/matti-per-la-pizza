/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosso: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#C41E1E',
          600: '#B01A1A',
          700: '#8B1515',
          800: '#6B1010',
          900: '#4A0B0B',
        },
        crema: {
          50: '#FFFDF7',
          100: '#FFF9E8',
          200: '#FFF3D1',
          300: '#FFE8A8',
          400: '#FFD97A',
          500: '#F5E6C8',
        },
        grano: {
          100: '#FAF3E6',
          200: '#F0E4C9',
          300: '#E6D5AC',
          400: '#D4BC7E',
          500: '#C2A355',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        round: ['Fredoka', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
