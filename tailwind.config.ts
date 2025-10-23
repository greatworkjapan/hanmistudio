import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // 余白を取りやすいセンター寄せ
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1200px' },
    },
    extend: {
      // 韓国コスメを連想させるパステル
      colors: {
        babyPink:   { light: '#FCEAF2', DEFAULT: '#F8CFE3', dark: '#E9AFC9' },
        lavender:   { light: '#EFE7FA', DEFAULT: '#D8C7F0', dark: '#BEA9E6' },
        mint:       { light: '#E9FBF6', DEFAULT: '#CDEFE3', dark: '#A8E1D0' },
        peach:      { light: '#FFF0E7', DEFAULT: '#FFD8C2', dark: '#FFC2A1' },
        powderBlue: { light: '#EAF4FF', DEFAULT: '#CFE8FF', dark: '#A6D2FF' },
      },
      // 柔らかい丸みのある書体を既定の sans に
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
