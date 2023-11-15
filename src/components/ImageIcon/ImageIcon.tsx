import Image from 'next/image';

interface ImageIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ImageIcon = ({ src, alt, width, height }: ImageIconProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className='z-10 transition-all duration-500 hover:scale-150 hover:cursor-pointer'
  />
);
