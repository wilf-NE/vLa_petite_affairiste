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
          950: '#4a2512',
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
          950: '#1f231a',
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
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#3b9b50',
          600: '#2d7d3e',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#e0a030',
          600: '#c4881f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
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
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
