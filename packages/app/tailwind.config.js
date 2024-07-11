import plugin from 'tailwindcss/plugin';
import tailwindcssExtra from 'tailwindcss-extra';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfb',
          100: '#cafdf6',
          200: '#96f9ee',
          300: '#59efe4',
          400: '#27dad3',
          DEFAULT: '#0ebfba',
          600: '#089998',
          700: '#0b7a7a',
          800: '#0e6061',
          900: '#022e31'
        }
      },
      spacing: {
        nav: '64px',
        sidebar: '300px',
        content: 'calc(100% - 600px)'
      },
      zIndex: {
        popup: 999
      },
      backgroundImage: {
        streamer: `radial-gradient(50% 50% at 50% 50%, #F6B065 0%, #F1A554 31%, #B97731 63%, #985B1B 100%)`
      }
    }
  },
  plugins: [
    tailwindcssExtra,
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        '.bg-polka': {
          backgroundColor: 'transparent',
          backgroundImage: `radial-gradient(#383838 0.7px, transparent 0.7px), radial-gradient(#383838 0.7px, #f9fefe 0.7px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0,14px 14px'
        },
        '.offset-rect': {
          offsetPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }
      });
      addComponents({
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '7px',
            height: '7px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
            borderRadius: '8px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#adadad',
            borderRadius: '8px',
            '&:hover': {
              background: '#838383'
            }
          },
          '&::-webkit-scrollbar-corner': {
            background: 'transparent'
          }
        }
      });
    })
  ]
};
