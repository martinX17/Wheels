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
        'light' : '#222',
        'dark' : '#1b1b1b'
      },
      screens: {
        'mobile' : '600px',
        'tablet': '993px',
        'uppermid' : '1200px',
        'desktop' : '1400px'
      },
    },
  },
  plugins: [],
}

