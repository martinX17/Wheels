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
        'lowest':'350px',
        'mobile' : '600px',
        'lowermid':'768px',
        'tablet': '993px',
        'uppermid' : '1200px',
        'desktop' : '1400px'
      },
      gridTemplateColumns: {
        '3': 'repeat(3,1fr)',
        '4': 'repeat(4,1fr)',
        '5':'repeat(5,1fr)'
      }
    },
  },
  plugins: [],
}

