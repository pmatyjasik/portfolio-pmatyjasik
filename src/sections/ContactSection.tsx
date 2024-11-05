import { ImageIcon } from '@/components/ImageIcon';
import { SectionTitle } from '@/components/SectionTitle';
import Link from 'next/link';

interface Contact {
  href: string;
  imgSrc: string;
  name: string;
}

const contactItems: Contact[] = [
  {
    href: 'https://www.linkedin.com/in/piotr-matyjasik/',
    imgSrc: '/svgs/contact-linkedin.svg',
    name: 'Linkedin',
  },
  {
    href: 'https://github.com/pmatyjasik',
    imgSrc: '/svgs/contact-github.svg',
    name: 'Github',
  },
  {
    href: 'mailto:pmatyjasik@icloud.com',
    imgSrc: '/svgs/contact-mail.svg',
    name: 'Mail',
  },
];

export const ContactSection = () => (
  <section
    className='container mx-auto mt-20 h-full px-4 md:mt-40'
    id='contact'
  >
    <div className='grid w-full gap-5 md:grid-cols-2'>
      <div className='flex w-full items-center gap-5'>
        <SectionTitle title='Contact' className='mb-0' />
        <hr className='w-full' />
      </div>
      <div className='flex w-full justify-between md:justify-around'>
        {contactItems.map(({ href, imgSrc, name }) => (
          <Link
            key={name}
            href={href}
            rel='noopener noreferrer'
            target='_blank'
          >
            <ImageIcon
              src={imgSrc}
              alt={name}
              width={64}
              height={64}
              className='size-16'
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
);
