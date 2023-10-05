/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: '20px',
      },
      colors: {
        orange: '#F26813',
        milk: '#FFF9ED',
        gray: '#2F2F2F',
        lgray: '#F7F7F7',
      },
    },
    screens: {
      'md': {'max': '830px'}
    }
  },
  plugins: [],
}

