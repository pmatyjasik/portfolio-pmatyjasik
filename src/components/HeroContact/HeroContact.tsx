import { ImageIcon } from '@/components/ImageIcon';
import Link from 'next/link';

export const HeroContact = () => (
  <>
    <Link
      href='https://www.linkedin.com/in/piotr-matyjasik/'
      rel='noopener noreferrer'
      target='_blank'
      className='z-10'
    >
      <ImageIcon
        src='/svgs/linkedin.svg'
        alt='Linkedin'
        width={18}
        height={18}
      />
    </Link>
    <Link
      href='https://github.com/pmatyjasik'
      rel='noopener noreferrer'
      target='_blank'
      className='z-10'
    >
      <ImageIcon src='/svgs/github.svg' alt='Github' width={18} height={18} />
    </Link>
  </>
);
