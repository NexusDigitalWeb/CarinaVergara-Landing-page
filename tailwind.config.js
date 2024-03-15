/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'background-page-color': '#F5F0FF',
        'texts-color': '#220953',
        'smooth-pink': '#FF89CA',
        'light-blue': '#80D7DA',
        'water-green': '#03A7AD'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to top, #FF89CA,#9BC6D6, #80D7DA)',
      },
      fontFamily: {
        'page-font': ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

