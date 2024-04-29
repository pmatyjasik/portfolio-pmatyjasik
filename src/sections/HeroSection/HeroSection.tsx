import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/atoms/Logo';
import { Degree } from '@/components/Degree';
import { ImageIcon } from '@/components/ImageIcon';
import { Memoji } from '@/components/Memoji';
import { Name } from '@/components/Name';
import { Navigation } from '@/components/Navigation';
import { Role } from '@/components/Role';
import { WebBackground } from '@/components/WebBackground';
import { HeroContact } from '@/components/HeroContact';
import { MobileMenu } from '@/components/MobileMenu';
import { DownloadCV } from '@/components/DownloadCV';

export const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='hero-background relative h-[100svh] overflow-hidden px-4 shadow-2xl'>
      <div className='container mx-auto h-full pt-10'>
        <header className='flex items-center justify-between'>
          <div className='flex items-center gap-5 sm:gap-10 lg:gap-32 xl:gap-64'>
            <Logo />
            <Navigation className='hidden md:flex' />
          </div>
          <DownloadCV />
          <MobileMenu
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </header>
        <div className='pt-10 xl:pt-20 2xl:pt-32'>
          <div className='flex gap-5 sm:gap-10 lg:gap-32 xl:gap-64'>
            <div className='flex w-12 justify-center'>
              <Image
                src='/svgs/line-horizontal.svg'
                alt='Arrow bottom'
                aria-hidden
                width={12}
                height={281}
                className='h-full'
              />
              <div className='absolute bottom-20 hidden flex-col gap-3 sm:flex xl:bottom-28 2xl:bottom-44'>
                <HeroContact />
              </div>
            </div>
            <div>
              <Name />
              <Role />
              <Degree />
              <div className='mt-16 flex gap-5 sm:hidden'>
                <HeroContact />
              </div>
              <Link
                href='#about-me'
                className='bg-orange group absolute bottom-0 z-10 hidden h-24 w-24 items-center justify-center hover:cursor-pointer md:flex 2xl:h-28 2xl:w-28'
              >
                <ImageIcon
                  src='/svgs/arrow-down.svg'
                  alt='Arrow down'
                  width={40}
                  height={40}
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </div>
        <Memoji />
        <WebBackground />
      </div>
    </div>
  );
};
