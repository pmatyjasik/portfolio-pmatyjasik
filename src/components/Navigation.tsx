import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

interface NavigationProps {
  className?: string;
  onClick?: () => void;
}

interface NavigationItem {
  href: string;
  name: string;
}

const navigationItems: NavigationItem[] = [
  { href: '#about-me', name: 'About me' },
  { href: '#experience', name: 'Experience' },
  { href: '#my-projects', name: 'Projects' },
  { href: '#contact', name: 'Contact' },
];

export const Navigation = ({ className, onClick }: NavigationProps) => (
  <nav
    className={twMerge('font-regular z-50 flex gap-10 xl:text-lg', className)}
  >
    {navigationItems.map(({ href, name }) => (
      <Link
        key={name}
        href={href}
        className='transition-all duration-500 hover:scale-125 hover:cursor-pointer'
        onClick={onClick}
      >
        {name}
      </Link>
    ))}
  </nav>
);
