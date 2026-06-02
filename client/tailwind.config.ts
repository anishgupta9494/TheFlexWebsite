import tailwindcss from 'tailwindcss';
import defaultConfig from 'tailwindcss/defaultConfig';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(243, 115, 33)',
        secondary: 'rgb(31, 41, 55)',
        accent: 'rgb(34, 197, 94)',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
      });
    }),
  ],
} satisfies typeof defaultConfig;
