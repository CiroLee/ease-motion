import plugin from 'tailwindcss/plugin';
import tailwindcssExtra from 'tailwindcss-extra';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#845EF7',
          600: '#7239ee'
        }
      },
      spacing: {
        nav: '64px',
        sidebar: '300px',
        content: 'calc(100% - 600px)'
      },
      zIndex: {
        popup: 999
      }
    }
  },
  plugins: [
    tailwindcssExtra,
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        '.bg-polka': {
          backgroundColor: '#fff',
          backgroundImage: `radial-gradient(#383838 0.7px, transparent 0.7px), radial-gradient(#383838 0.7px, #ffffff 0.7px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0,14px 14px'
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
