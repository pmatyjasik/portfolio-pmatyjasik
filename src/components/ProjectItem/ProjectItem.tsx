import Image from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  technologies: string;
  pageHref: string;
  gitHref: string;
}

export const ProjectItem = ({
  src,
  alt,
  title,
  description,
  technologies,
  pageHref,
  gitHref,
}: ProjectItemProps) => (
  <article className='grid items-center gap-5 py-8 md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20'>
    <Image
      src={src}
      alt={alt}
      width={428}
      height={241}
      unoptimized
      priority
      aria-hidden
      className='bg-softPeach  w-full items-center p-5'
    />
    <div className='text-sea'>
      <h3 className='text-lg font-bold md:text-xl lg:text-2xl'>{title}</h3>{' '}
      <p className=' mt-4 text-base font-light leading-relaxed xl:mt-6 xl:text-lg'>
        {description}
      </p>
      <p className='mt-2 text-base font-light leading-relaxed xl:text-lg'>
        <span className='mr-2 mt-2 font-medium lg:mt-4'>Technologies:</span>
        {technologies}.
      </p>
      <div className='mt-4 flex items-center gap-5 xl:mt-6'>
        <Link
          className='border-frenchGrey flex items-center gap-1 border px-4 py-2 transition-all duration-500 hover:scale-110 hover:cursor-pointer'
          href={pageHref}
          rel='noopener noreferrer'
          target='_blank'
        >
          <span className='font-medium'>Explore</span>
          <Image
            src='/svgs/button-arrow.svg'
            alt='Arrow'
            width={26}
            height={26}
            aria-hidden
          />
        </Link>
        <Link
          className='flex items-center gap-1 px-3 py-1 transition-all duration-500 hover:scale-110 hover:cursor-pointer'
          href={gitHref}
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image
            src='/svgs/button-github.svg'
            alt='Github'
            width={26}
            height={26}
            aria-hidden
          />
          <span className='font-medium'>View GitHub</span>
        </Link>
      </div>
    </div>
  </article>
);
