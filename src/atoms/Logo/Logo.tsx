import Link from 'next/link';

export const Logo = () => (
  <Link
    href='/'
    className='font-syne group z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-bold text-black transition-all duration-500 hover:scale-125 hover:cursor-pointer'
  >
    <span className='transition-all duration-500 group-hover:scale-150'>P</span>
  </Link>
);
