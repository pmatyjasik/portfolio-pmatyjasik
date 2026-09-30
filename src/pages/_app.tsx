import { RootLayout } from '@/layouts/RootLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Piotr Matyjasik - full-stack product engineer (TypeScript / React) with 5+ years of shipping end-to-end. Built an AI agent at TesterArmy (YC P26). Explore my projects and experience.'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Piotr Matyjasik - Full-Stack Product Engineer'
        />
        <meta
          property='og:description'
          content='Piotr Matyjasik - full-stack product engineer (TypeScript / React) with 5+ years of shipping end-to-end. Built an AI agent at TesterArmy (YC P26). Explore my projects and experience.'
        />
        <meta property='og:image' content='/og-image.png' />
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <title>Piotr Matyjasik - Full-Stack Product Engineer</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3.0'
        />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
