import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0C1410',
        'dark-green': '#1B4D3E',
        'gold': '#C9A84C',
        'light-gray': '#E8E8E8',
      },
      fontFamily: {
        'slab': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(201, 168, 76, 0.3)',
        'glow-green': '0 0 20px rgba(27, 77, 62, 0.3)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0C1410 0%, #1B4D3E 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
