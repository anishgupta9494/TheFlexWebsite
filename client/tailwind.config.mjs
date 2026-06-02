import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, rgb(243, 115, 33) 0%, rgb(204, 85, 17) 100%)',
        'orange-light-gradient': 'linear-gradient(135deg, rgb(255, 152, 64) 0%, rgb(243, 115, 33) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

