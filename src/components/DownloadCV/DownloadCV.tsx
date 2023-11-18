import { IconButton } from '@/atoms/IconButton';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface DownloadCVProps {
  className?: string;
}

export const DownloadCV = ({ className }: DownloadCVProps) => (
  <IconButton
    src='/svgs/download.svg'
    alt='Download icon'
    width={24}
    height={24}
    className={twMerge('z-20', className)}
  >
    <Link href='/' download>
      Download CV
    </Link>
  </IconButton>
);
