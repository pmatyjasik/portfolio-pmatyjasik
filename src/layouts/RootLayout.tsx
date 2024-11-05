import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Syne, Poppins } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => (
  <main
    className={twMerge(
      syne.variable,
      poppins.variable,
      'scroll-smooth font-poppins text-white'
    )}
  >
    {children}
  </main>
);
