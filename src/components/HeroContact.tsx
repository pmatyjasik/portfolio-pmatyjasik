import { ImageIcon } from '@/components/ImageIcon';
import Link from 'next/link';

interface Social {
  href: string;
  imgSrc: string;
  name: string;
}

const socials: Social[] = [
  {
    href: 'https://www.linkedin.com/in/piotr-matyjasik/',
    imgSrc: '/svgs/linkedin.svg',
    name: 'Linkedin',
  },
  {
    href: 'https://github.com/pmatyjasik',
    imgSrc: '/svgs/github.svg',
    name: 'Github',
  },
];

export const HeroContact = () => (
  <>
    {socials.map(({ href, imgSrc, name }) => (
      <Link
        key={name}
        href={href}
        rel='noopener noreferrer'
        target='_blank'
        className='z-20'
      >
        <ImageIcon
          src={imgSrc}
          alt={name}
          width={20}
          height={20}
          className='size-5'
        />
      </Link>
    ))}
  </>
);
