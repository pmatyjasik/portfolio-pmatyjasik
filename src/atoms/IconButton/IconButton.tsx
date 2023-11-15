import { ReactNode } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: ReactNode;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
export const IconButton = ({
  children,
  src,
  alt,
  width,
  height,
  className,
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={twMerge(
        'font-regular z-10 hidden items-center justify-center gap-2 text-sm transition-all duration-500 hover:scale-125 hover:cursor-pointer md:flex xl:text-lg',
        className
      )}
    >
      <Image src={src} alt={alt} width={width} height={height} priority />
      <div>
        <span>{children}</span>
      </div>
    </button>
  );
};
