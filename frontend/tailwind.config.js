/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // adjust this if your files live elsewhere
  theme: {
    extend: {
      keyframes: {
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        expand: 'expandWidth 10s linear infinite',
      },
    },
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.gradient-background':{
          background: 'linear-gradient(180deg,rgba(15, 15, 15, 1) 0%, rgba(17, 3, 38, 1) 16%, rgba(17, 3, 38, 1) 84%, rgba(15, 15, 15, 1) 100%)',
        },
      })
    }
  ],
};