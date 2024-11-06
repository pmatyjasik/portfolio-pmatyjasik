import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface DownloadCVProps {
  className?: string;
}

export const DownloadCV = ({ className }: DownloadCVProps) => (
  <button
    type='button'
    className={twMerge(
      'font-regular z-10 hidden items-center justify-center gap-2 text-sm transition-all duration-500 hover:scale-125 hover:cursor-pointer md:flex xl:text-lg',
      'pointer-events-none opacity-50',
      className
    )}
  >
    <Image
      src='/svgs/download.svg'
      alt='Download icon'
      width={24}
      height={24}
      className='size-6'
    />
    <span>Download CV</span>
  </button>
);
