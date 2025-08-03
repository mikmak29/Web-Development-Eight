/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      screens: {
        mobileM: '375px',
        mobileL: '425px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        "accent-color": "#CB997E"
      },
    },
  },
  plugins: [],
}

