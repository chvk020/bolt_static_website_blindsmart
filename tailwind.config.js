/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Purple palette
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        // Gold palette
        gold: {
          50: '#fefdf7',
          100: '#fdf9e3',
          200: '#faf0c0',
          300: '#f6e38b',
          400: '#f0d055',
          500: '#e9b72a',
          600: '#d69f1e',
          700: '#b37f18',
          800: '#93661a',
          900: '#7a5419',
        },
        // Cream palette
        cream: {
          50: '#fefdf9',
          100: '#fdf9ee',
          200: '#f9eed4',
          300: '#f4ddac',
          400: '#ebc57b',
          500: '#e3a949',
          600: '#d48b2a',
          700: '#b06f21',
          800: '#8f5a20',
          900: '#764b1d',
        },
        // Lavender palette
        lavender: {
          50: '#f7f7fe',
          100: '#f1effd',
          200: '#e4e1fa',
          300: '#d0c9f6',
          400: '#b3a6ef',
          500: '#9d8ce8',
          600: '#8370dd',
          700: '#6953c4',
          800: '#5744a0',
          900: '#493c7f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};