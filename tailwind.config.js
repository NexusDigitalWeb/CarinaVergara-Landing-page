/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'background-page-color': '#F5F0FF',
        'texts-color': '#220953',
        'smooth-pink': '#FF89CA',
        'light-blue': '#80D7DA'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #FF89CA, #80D7DA)',
      },
      fontFamily: {
        'page-font': ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

