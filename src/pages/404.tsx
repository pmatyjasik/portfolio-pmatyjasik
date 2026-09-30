import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => (
  <>
    <Head>
      <title>Page not found - Piotr Matyjasik</title>
    </Head>
    <div className='flex h-svh flex-col items-center justify-center bg-hero-gradient px-4 text-center'>
      <p className='font-syne text-8xl font-bold md:text-9xl'>404</p>
      <p className='mt-4 text-base font-light text-gray-400 md:text-lg'>
        This page doesn&apos;t exist.
      </p>
      <Link
        href='/'
        className='mt-8 border border-gray-500 px-6 py-2 font-medium transition-all duration-500 hover:scale-110'
      >
        Back to home
      </Link>
    </div>
  </>
);

export default NotFound;
