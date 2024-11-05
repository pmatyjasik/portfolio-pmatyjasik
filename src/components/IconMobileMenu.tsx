import { ImageIcon } from '@/components/ImageIcon';

interface IconMobileMenuProps {
  onClick: () => void;
}

export const IconMobileMenu = ({ onClick }: IconMobileMenuProps) => {
  return (
    <button
      type='button'
      className='font-syne z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-bold text-black transition-all duration-500 hover:scale-125 hover:cursor-pointer md:hidden'
      onClick={onClick}
    >
      <ImageIcon src='/svgs/menu.svg' alt='Menu' width={17} height={14} />
    </button>
  );
};
