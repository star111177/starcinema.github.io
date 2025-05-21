/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-black': '#050314',
        'space-blue': '#0C164F',
        'space-purple': '#281760',
        'neon-pink': '#FF00C7',
        'neon-blue': '#00FFE0',
        'neon-purple': '#9D4EDD',
        'star-yellow': '#FFDE3B'
      },
      fontFamily: {
        'cinema': ['Inter', 'sans-serif'],
        'title': ['Montserrat', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s alternate infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        twinkle: {
          '0%': { opacity: 0.3 },
          '100%': { opacity: 1 }
        }
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #050314, #0C164F)',
        'neon-gradient': 'linear-gradient(to right, #FF00C7, #00FFE0)'
      },
      boxShadow: {
        'neon': '0 0 5px 2px rgba(255, 0, 199, 0.5), 0 0 10px rgba(0, 255, 224, 0.3)',
        'neon-blue': '0 0 5px 2px rgba(0, 255, 224, 0.5)',
        'neon-pink': '0 0 5px 2px rgba(255, 0, 199, 0.5)'
      }
    },
  },
  plugins: [],
};