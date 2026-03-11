/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'forest-green': {
          DEFAULT: '#2D5016',
          dark: '#1A330A',
          light: '#4A6B32',
        },
        'luxury-gold': {
          DEFAULT: '#D4AF37',
          light: '#E6C663',
        },
        'charcoal': '#1A1A1A',
        'cream': '#FDFCF8',
        'sand': '#F2EFE9',
        'sage': '#94A388',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2D5016 0deg, #D4AF37 180deg, #2D5016 360deg)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gentle-pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.8 },
        },
        'aurora-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(60px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 50px) scale(0.95)' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-50px, 60px) scale(1.05)' },
          '66%': { transform: 'translate(70px, -30px) scale(1.1)' },
        },
        'aurora-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.05)' },
          '50%': { transform: 'translate(40px, -60px) scale(0.95)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
        'marquee-left-slow': 'marquee-left 60s linear infinite',
        'marquee-right-slow': 'marquee-right 60s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
        'aurora-1': 'aurora-1 12s ease-in-out infinite',
        'aurora-2': 'aurora-2 15s ease-in-out infinite',
        'aurora-3': 'aurora-3 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
