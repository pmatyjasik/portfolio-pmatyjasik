import Image from 'next/image';

export const Memoji = () => (
  <Image
    src='/images/avatarHero.webp'
    alt='Hero image'
    width={750}
    height={750}
    priority
    className='absolute bottom-0 right-0 z-10 size-[250px] md:size-[400px] lg:size-[500px] xl:size-[650px] 2xl:right-40 2xl:size-[750px]'
  />
);
