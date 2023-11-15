interface SectionTitleProps {
  title: string;
}
export const SectionTitle = ({ title }: SectionTitleProps) => (
  <h2 className='font-syne mb-5 min-w-fit text-4xl font-medium text-black md:mb-0 lg:text-5xl xl:text-6xl'>
    {title}
  </h2>
);
