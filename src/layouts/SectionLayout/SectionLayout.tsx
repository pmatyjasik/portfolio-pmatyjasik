import { ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
  id: string;
}

export const SectionLayout = ({ children, id }: SectionLayoutProps) => (
  <section className='container mx-auto mt-20 h-full px-4 md:mt-40' id={id}>
    <div className='block items-start gap-5 sm:gap-10 md:flex md:gap-24 lg:gap-32 xl:gap-48'>
      {children}
    </div>
  </section>
);
