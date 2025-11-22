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
          content='Hi. I am Piotr Matyjasik, explore my portfolio — a compilation of projects intertwined with a detailed overview of my professional experience and skills.'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Piotr Matyjasik' />
        <meta
          property='og:description'
          content='Hi. I am Piotr Matyjasik, explore my portfolio — a compilation of projects intertwined with a detailed overview of my professional experience and skills.'
        />
        <meta property='og:image' content='/og-image.png' />
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <title>Piotr Matyjasik</title>
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
