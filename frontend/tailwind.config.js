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
  plugins: [],
};