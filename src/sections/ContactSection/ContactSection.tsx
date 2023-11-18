import { ImageIcon } from '@/components/ImageIcon';
import { SectionTitle } from '@/components/SectionTitle';
import Link from 'next/link';

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
        <Link
          href='https://www.linkedin.com/in/piotr-matyjasik/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <ImageIcon
            src='/svgs/contact-linkedin.svg'
            alt='Linkedin'
            aria-hidden
            width={63}
            height={63}
          />
        </Link>
        <Link
          href='https://github.com/pmatyjasik'
          rel='noopener noreferrer'
          target='_blank'
        >
          <ImageIcon
            src='/svgs/contact-github.svg'
            alt='Github'
            aria-hidden
            width={63}
            height={63}
          />
        </Link>
        <Link
          href='mailto:pmatyjasik@icloud.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <ImageIcon
            src='/svgs/contact-mail.svg'
            alt='Mail'
            aria-hidden
            width={63}
            height={63}
          />
        </Link>
      </div>
    </div>
  </section>
);
