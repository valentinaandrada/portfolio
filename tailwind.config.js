/** @type {import('tailwindcss').Config} */

import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#E6E6E6', 
        secondary: '#1E1E1E', 
        accent: '#B21717', 
        grey: '#808080',
        darkPrimary: '#1E1E1E', 
        darkSecondary: '#E6E6E6',
        darkAccent: '#EA4E4E',
        overlay: {
          light: 'rgba(0, 0, 0, 0.2)', // Light transparent black
          dark: 'rgba(0, 0, 0, 0.6)', // Dark transparent black
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', '24px'], 
        sm: ['14px', '20px'],
        lg: ['18px', '28px'],
        xl: ['24px', '32px'],
      },
      letterSpacing: {
        wide: '0.3em',
        normal: '0.1em',
        tight: '0.03em',
      },
      fontWeight: {
        light: 200,
        regular: 400,
        medium: 500,
        bold: 700,
      },
      spacing: {
        128: '32rem', 
        144: '36rem',
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
    },
  },
  plugins: [
    scrollbarHide
  ],
}

