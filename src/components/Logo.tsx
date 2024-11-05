import Link from 'next/link';

export const Logo = () => (
  <Link
    href='/'
    className='group z-50 flex size-12 items-center justify-center rounded-full bg-white font-syne text-2xl font-bold text-black transition-all duration-500 hover:scale-125'
  >
    <span>P</span>
  </Link>
);
