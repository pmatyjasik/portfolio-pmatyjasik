import { Logo } from '@/components/Logo';
import { DownloadCV } from '@/components/DownloadCV';
import { HeroContact } from '@/components/HeroContact';
import { Navigation } from '@/components/Navigation';

export const Footer = () => (
  <footer className='bg-black'>
    <div className='container mx-auto mt-20 h-full px-4 py-16 md:mt-40'>
      <div className='block w-full items-center justify-between md:flex'>
        <Logo />
        <Navigation className='mt-8 flex-col items-baseline gap-5 md:mt-0 md:flex-row md:gap-10' />
      </div>
    </div>
    <div className='border-t border-white border-opacity-20'>
      <div className='container mx-auto h-full px-4  py-6'>
        <div className='flex w-full items-center justify-between'>
          <DownloadCV />
          <div className='flex items-center gap-5'>
            <span className='text-xs font-extralight'>FOLLOW ME:</span>
            <HeroContact />
          </div>
        </div>
      </div>
    </div>
    <div className='bg-[#121415] py-3 text-center'>
      <p className='text-xs font-light md:text-sm'>
        © Copyright 2023 · All Rights Reserved ·{' '}
        <span className='font-medium'>Piotr Matyjasik</span>
      </p>
    </div>
  </footer>
);
