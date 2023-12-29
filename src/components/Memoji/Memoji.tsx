import Image from 'next/image';

export const Memoji = () => (
  <Image
    src='/images/avatarHero.png'
    alt='Hero image'
    width={750}
    height={750}
    priority
    aria-hidden
    className='absolute bottom-0 right-0 z-10 h-[250px] w-[250px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[650px] xl:w-[650px] 2xl:right-40 2xl:h-[750px] 2xl:w-[750px]'
  />
);
