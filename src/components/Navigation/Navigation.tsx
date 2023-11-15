import { twMerge } from 'tailwind-merge';
import { NavItem } from '../NavItem';
import { DownloadCV } from '@/components/DownloadCV';

interface NavigationProps {
  className?: string;
  downloadCV?: boolean;
  onClick?: () => void;
}

export const Navigation = ({
  className,
  downloadCV,
  onClick,
}: NavigationProps) => (
  <nav
    className={twMerge('font-regular z-10 flex gap-10 xl:text-lg', className)}
  >
    <NavItem href='/' text='About me' onClick={onClick} />
    <NavItem href='/' text='Experience' onClick={onClick} />
    <NavItem href='/' text='Projects' onClick={onClick} />
    <NavItem href='/' text='Contact' onClick={onClick} />
    {downloadCV && <DownloadCV className='mt-10 flex font-medium' />}
  </nav>
);
