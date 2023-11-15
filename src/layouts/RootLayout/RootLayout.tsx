import { poppins, syne } from '@/utils/fonts';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => (
  <div
    className={twMerge(
      syne.variable,
      poppins.variable,
      'font-poppins text-white'
    )}
  >
    {children}
  </div>
);
