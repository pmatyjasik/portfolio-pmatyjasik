import Image from 'next/image';

export const Role = () => (
  <div className='mt-5 flex gap-10'>
    <Image
      src='/svgs/direction.svg'
      alt='Direction right'
      aria-hidden
      width={38}
      height={19}
      className='h-auto w-auto'
    />
    <h2 className='text-gray text-xl font-normal lg:text-xl xl:text-2xl 2xl:text-2xl'>
      Front-End Developer
    </h2>
  </div>
);
