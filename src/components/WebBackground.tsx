import Image from 'next/image';

export const WebBackground = () => (
  <Image
    src='/svgs/web.svg'
    alt='Web icon'
    width={1500}
    height={1500}
    priority
    className='absolute top-0 z-[5] size-[1000px] lg:right-0 lg:size-[1500px] xl:left-1/4 xl:size-[1500px] 2xl:right-0 2xl:size-[1500px]'
  />
);
