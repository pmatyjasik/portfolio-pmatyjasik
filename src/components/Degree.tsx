import Image from 'next/image';

export const Degree = () => (
  <div className='mt-5 flex items-center gap-8 md:mt-20'>
    <Image
      src='/svgs/order.svg'
      alt='Order'
      width={46}
      height={33}
      className='h-[33px] w-[46px]'
    />
    <h2 className='font-thin md:text-xl xl:text-2xl'>
      Bachelor of Computer Science
    </h2>
  </div>
);
