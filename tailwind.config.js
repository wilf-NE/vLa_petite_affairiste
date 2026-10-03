/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f3',
          100: '#f9ecdc',
          200: '#f2d4ad',
          300: '#eab67a',
          400: '#e0984f',
          500: '#d97e2e',
          600: '#c46724',
          700: '#a34e1f',
          800: '#823f1f',
          900: '#6b351b',
        },
        secondary: {
          50: '#f6f7f5',
          100: '#e8ebe3',
          200: '#d2d8c8',
          300: '#b1bb9f',
          400: '#8d9a75',
          500: '#6f7d56',
          600: '#566342',
          700: '#454f36',
          800: '#39402e',
          900: '#313529',
        },
        accent: {
          50: '#fef5f3',
          100: '#fce5e0',
          200: '#f9ccc3',
          300: '#f3a79a',
          400: '#ea7867',
          500: '#dd5443',
          600: '#c93f2f',
          700: '#a83124',
          800: '#8a2b22',
          900: '#722a22',
        },
        stone: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#eae6dd',
          300: '#d9d2c4',
          400: '#bdb29c',
          500: '#a0917a',
          600: '#857862',
          700: '#6b604f',
          800: '#4a4239',
          900: '#2e2924',
          950: '#1a1714',
        },
        success: {
          500: '#3b9b50',
          600: '#2d7d3e',
        },
        warning: {
          500: '#e0a030',
          600: '#c4881f',
        },
        error: {
          500: '#d94545',
          600: '#c03434',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
