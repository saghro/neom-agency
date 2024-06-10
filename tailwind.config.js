/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#272D4E',
        customRed: '#FF5757',
        customDeepRed: '#C83C3C',
        'custom-red': '#770000',
        'redd': '#FF0000',
      },
      fontFamily: {
        koulen: ['Koulen', 'sans-serif'],
        'montserrat': ['Montserrat'],
      },
      animation: {
        'typewriter': 'typewriter 3s steps(40, end) infinite alternate',
        'blink': 'blink .7s step-end infinite',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}