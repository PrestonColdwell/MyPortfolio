/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Genos', 'sans'],
        GreatVibes: ['Great Vibes', 'sans'],
      }
    },
    colors: {
      'primary': '#242424', // Charcoal
      'secondary': '#7C7C7C', // Gray
      'tertiary': '#194FA5', // Blue
      'text': '#CACACA', // Light Gray
    }
  },
  plugins: [],
}

