import plugin from 'tailwindcss/plugin';
import tailwindcssExtra from 'tailwindcss-extra';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#845EF7'
        }
      },
      spacing: {
        nav: '64px'
      }
    }
  },
  plugins: [
    tailwindcssExtra,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-polka': {
          backgroundColor: '#fff',
          backgroundImage: `radial-gradient(#383838 0.7px, transparent 0.7px), radial-gradient(#383838 0.7px, #ffffff 0.7px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0,14px 14px'
        }
      });
    })
  ]
};
