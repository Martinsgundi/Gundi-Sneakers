/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        midLg: '900px',
        lgXl: '1180px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        darkGrayBlue: 'hsl(219, 9%, 45%)',
        lightGrayBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        overlayBlack: 'hsl(0, 0%, 0%, 0.75)',
        hoverThumbnail: 'hsl(0, 0%, 0%, 0.1)',
      },
      fontFamily: {
        KumbhSans: 'Kumbh+Sans'
      },
    },
  },
  plugins: [],
}