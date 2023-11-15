/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roobert': ['Roobert', 'sans-serif'],
      },
      colors: {
        primary: '#9146ff'
      },
    },
  },
  plugins: [],
}

