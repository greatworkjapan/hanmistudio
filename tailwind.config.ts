import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // パステル調の基本色を追加
        primary: {
          light: '#FCECEF',
          DEFAULT: '#F5B7C5',
          dark: '#E99AAE',
        },
        secondary: {
          light: '#E9F4FD',
          DEFAULT: '#A6CEE3',
          dark: '#7FB3D5',
        },
      },
    },
  },
  plugins: [],
};

export default config;