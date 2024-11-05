import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      syne: 'var(--font-syne)',
      poppins: 'var(--font-poppins)',
    },
    extend: {
      colors: {
        black: '#030303',
        silver: '#C8C8C8',
        orange: '#D54300',
        stormDust: '#616161',
        sand: '#DDCEC7',
        sea: '#272728',
        granite: '#595858',
        cyanBlue: '#FAFBFC',
        lightGrey: '#D9D9D9',
        softPeach: '#EDEFF1',
        frenchGrey: '#BEBEBE',
      },
    },
  },
  plugins: [],
};
export default config;
