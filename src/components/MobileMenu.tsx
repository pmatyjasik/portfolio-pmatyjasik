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
          'group z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white font-syne text-2xl font-bold text-black',
          !isOpen && 'md:hidden'
        )}
        onClick={toggleMenu}
      >
        <Image
          src={isOpen ? '/svgs/close-menu.svg' : '/svgs/open-menu.svg'}
          alt='Menu'
          width={17}
          height={14}
        />
      </button>
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        initial='closed'
        variants={variants}
        className='bg-hero-gradient fixed left-0 top-0 z-30 flex h-screen w-screen flex-col items-center justify-center'
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
