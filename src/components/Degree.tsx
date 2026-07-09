import Image from 'next/image';

export const Degree = () => (
  <div className='flex items-center gap-8'>
    <Image
      src='/svgs/order.svg'
      alt='Order'
      width={46}
      height={33}
      className='h-8.25 w-11.5'
    />
    <div className='flex flex-col items-start gap-y-2 md:gap-y-4'>
      <h2 className='font-thin md:text-xl xl:text-2xl'>
        Bachelor of Computer Science
      </h2>
      <h2 className='font-thin md:text-xl xl:text-2xl'>Master of Management</h2>
      <h2 className='font-thin md:text-xl xl:text-2xl'>Y Combinator P26</h2>
    </div>
  </div>
);
