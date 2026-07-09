import Image from 'next/image';

export const Role = () => (
  <div className='mt-5 flex items-center gap-10'>
    <Image
      src='/svgs/direction.svg'
      alt='Direction right'
      width={38}
      height={19}
      className='h-4.75 w-9.5'
    />
    <h2 className='text-xl font-normal text-gray-400 lg:text-xl xl:text-2xl 2xl:text-2xl'>
      Senior Software Engineer | AI Engineer
    </h2>
  </div>
);
