import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { useState } from 'react';

const variants = {
  open: { x: 0, transition: { type: 'linear' } },
  closed: { x: '100%', transition: { type: 'linear' } },
};

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        type='button'
        className={twMerge(
          'group z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white font-syne text-2xl font-bold text-black transition-all duration-500 hover:scale-125',
          !isOpen && 'md:hidden'
        )}
        onClick={toggleMenu}
      >
        <div className='transition-all duration-500 group-hover:scale-150'>
          {isOpen ? (
            <Image
              src='/svgs/close-menu.svg'
              alt='Menu'
              width={17}
              height={14}
            />
          ) : (
            <Image
              src='/svgs/open-menu.svg'
              alt='Menu'
              width={17}
              height={14}
            />
          )}
        </div>
      </button>
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        initial='closed'
        variants={variants}
        className='hero-background fixed left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center'
      >
        <Navigation
          onClick={toggleMenu}
          downloadCV
          className='flex-col items-center text-lg'
        />
      </motion.div>
    </>
  );
};
