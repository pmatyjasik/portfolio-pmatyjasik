import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/Logo';
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

export const HeroSection = () => (
  <div className='relative  h-svh overflow-hidden bg-[linear-gradient(180deg,#010101,#0F0F44)] px-4 shadow-2xl'>
    <div className='container mx-auto h-full pt-10'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-5 sm:gap-10 lg:gap-32 xl:gap-64'>
          <Logo />
          <Navigation className='hidden md:flex' />
        </div>
        <DownloadCV />
        <MobileMenu />
      </header>
      <div className='pt-10 xl:pt-20 2xl:pt-32'>
        <div className='flex gap-5 sm:gap-10 lg:gap-32 xl:gap-64'>
          <div className='flex w-12 justify-center'>
            <Image
              src='/svgs/line-horizontal.svg'
              alt='Arrow bottom'
              width={12}
              height={281}
              className='h-[281px] w-3'
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
              className='absolute bottom-0 z-10 hidden h-24 w-24 items-center justify-center bg-orange hover:cursor-pointer md:flex 2xl:h-28 2xl:w-28'
            >
              <ImageIcon
                src='/svgs/arrow-down.svg'
                alt='Arrow down'
                width={40}
                height={40}
                className='size-10'
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
