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
        gray: '#C8C8C8',
        orange: '#FC6D2B',
      },
    },
  },
  plugins: [],
};
export default config;
