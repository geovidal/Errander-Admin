/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#229b5c',
          600: '#1a7a47',
          700: '#0f5a2e',
        },
        accent: {
          50: '#fef7ed',
          500: '#f7a72a',
          600: '#e6951a',
          700: '#d4850a',
        },
        brand: {
          50: '#eff6ff',
          500: '#0a6cf4',
          600: '#0854c7',
          700: '#063d9a',
        },
        success: {
          50: '#f0fdf4',
          500: '#35af67',
          600: '#229b5c',
          700: '#1a7a47',
        },
        warning: {
          50: '#fef7ed',
          500: '#f7a72a',
          600: '#e6951a',
          700: '#d4850a',
        },
        error: {
          50: '#fef2f2',
          500: '#e63715',
          600: '#d42a0a',
          700: '#b91c1c',
        },
        purple: {
          50: '#faf5ff',
          500: '#ae40f3',
          600: '#9d35d9',
          700: '#8b2bbf',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
