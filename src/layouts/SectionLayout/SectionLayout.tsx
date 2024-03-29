import { ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
  id: string;
}

export const SectionLayout = ({ children, id }: SectionLayoutProps) => (
  <section
    className='container mx-auto mt-10 h-full px-4 pt-10 md:mt-20 md:pt-20'
    id={id}
  >
    <div className='block items-start gap-5 sm:gap-10 md:grid md:grid-cols-[180px_auto] md:gap-24 lg:grid-cols-[230px_auto] lg:gap-32 xl:grid-cols-[280px_auto] xl:gap-48'>
      {children}
    </div>
  </section>
);
