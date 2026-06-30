import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#050816',
          900: '#0b1224',
          800: '#111c36',
          600: '#3b82f6',
          500: '#60a5fa',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
