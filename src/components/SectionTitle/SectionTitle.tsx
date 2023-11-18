import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  title: string;
  className?: string;
}
export const SectionTitle = ({ title, className }: SectionTitleProps) => (
  <h2
    className={twMerge(
      'font-syne text-sea mb-5 text-4xl font-medium md:mb-0 lg:text-5xl xl:text-6xl',
      className
    )}
  >
    {title}
  </h2>
);
