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
        'primary': '#1985A1',      // RGB(25, 133, 161) - Teal blue
        'secondary': '#172A3A',    // RGB(23, 42, 58) - Dark navy
        'tertiary': '#7FC6A4',     // RGB(127, 198, 164) - Mint green
        'wedge': {
          primary: '#1985A1',
          secondary: '#172A3A', 
          tertiary: '#7FC6A4',
          50: '#f0f9fc',
          100: '#e1f2f8',
          200: '#c3e6f1',
          300: '#94d3e6',
          400: '#5eb8d4',
          500: '#1985A1',
          600: '#156b82',
          700: '#145969',
          800: '#164b57',
          900: '#172A3A',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}