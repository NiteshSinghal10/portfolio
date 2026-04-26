/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0f',
        secondary: '#111118',
        card: '#16161f',
        accent: {
          DEFAULT: '#6c63ff',
          light: '#8b85ff',
        },
        content: {
          primary: '#f0f0f5',
          secondary: '#9090a8',
          muted: '#60607a',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6c63ff 0%, #a855f7 100%)',
        'grid-overlay': 'linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)',
      },
      borderRadius: {
        card: '12px',
        'card-lg': '20px',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-2': 'float 5s ease-in-out 0.5s infinite',
        'float-3': 'float 4.5s ease-in-out 1s infinite',
        'float-4': 'float 5.5s ease-in-out 1.5s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slow-rev': 'float 10s ease-in-out reverse infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        blink: 'blink 1s infinite',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.6)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scrollDown: {
          '0%': { top: '-8px', opacity: '1' },
          '100%': { top: '44px', opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
        'accent-sm': '0 4px 20px rgba(108, 99, 255, 0.3)',
        'accent-lg': '0 8px 28px rgba(108, 99, 255, 0.45)',
        'accent-glow': '0 0 30px rgba(108, 99, 255, 0.15)',
      },
    },
  },
  plugins: [],
};
