import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  title: string;
  className?: string;
}
export const SectionTitle = ({ title, className }: SectionTitleProps) => (
  <h2
    className={twMerge(
      'mb-5 font-syne text-4xl font-medium text-gray-800 md:mb-0 lg:text-5xl xl:text-6xl',
      className
    )}
  >
    {title}
  </h2>
);
