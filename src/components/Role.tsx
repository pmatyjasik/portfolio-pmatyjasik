import Image from 'next/image';

export const Role = () => (
  <div className='mt-5 flex items-center gap-10'>
    <Image
      src='/svgs/direction.svg'
      alt='Direction right'
      width={38}
      height={19}
      className='h-[19px] w-[38px]'
    />
    <h2 className='text-xl font-normal text-silver lg:text-xl xl:text-2xl 2xl:text-2xl'>
      Front-End Developer
    </h2>
  </div>
);
