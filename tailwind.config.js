/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-yellow': '#f5b754',
        'light' : '#222'
      },
      screens: {
        'tablet': '992px',
        'uppermid' : '1200px',
        'desktop' : '1400px'
      },
    },
  },
  plugins: [],
}

