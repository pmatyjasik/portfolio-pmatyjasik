import Link from 'next/link';

interface NavItemProps {
  href: string;
  text: string;
  onClick?: () => void;
}

export const NavItem = ({ href, text, onClick }: NavItemProps) => (
  <Link
    href={href}
    className='transition-all duration-500 hover:scale-125 hover:cursor-pointer'
    onClick={onClick}
  >
    {text}
  </Link>
);
