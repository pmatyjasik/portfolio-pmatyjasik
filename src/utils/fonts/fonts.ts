import { Syne, Poppins } from 'next/font/google';

export const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
