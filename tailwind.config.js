/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          koulen: ['Koulen', 'sans-serif'],
          'montserrat': ['Montserrat'],
        },
        textUnderlineOffset: {
          16: '16px',
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
        colors: {
          'custom-red': '#770000',
          'redd': '#FF0000'
        },
      },
    },
    
    plugins: [],
  }