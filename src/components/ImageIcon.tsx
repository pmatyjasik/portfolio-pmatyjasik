import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ImageIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const ImageIcon = ({
  src,
  alt,
  width,
  height,
  className,
}: ImageIconProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={twMerge(
      'z-10 transition-all duration-500 hover:scale-125 hover:cursor-pointer',
      className
    )}
  />
);
