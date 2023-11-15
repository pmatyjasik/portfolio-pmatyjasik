import { IconButton } from '@/atoms/IconButton';
import Link from 'next/link';

interface DownloadCVProps {
  className?: string;
}

export const DownloadCV = ({ className }: DownloadCVProps) => (
  <IconButton
    src='/svgs/download.svg'
    alt='Download icon'
    width={24}
    height={24}
    className={className}
  >
    <Link href='/' download>
      Download CV
    </Link>
  </IconButton>
);
