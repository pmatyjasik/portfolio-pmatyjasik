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
    className={twMerge('font-regular z-50 flex gap-10 xl:text-lg', className)}
  >
    <NavItem href='#about-me' text='About me' onClick={onClick} />
    <NavItem href='#experience' text='Experience' onClick={onClick} />
    <NavItem href='#my-projects' text='Projects' onClick={onClick} />
    <NavItem href='#contact' text='Contact' onClick={onClick} />
    {downloadCV && <DownloadCV className='mt-10 flex font-medium' />}
  </nav>
);
