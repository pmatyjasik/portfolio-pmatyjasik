import { RootLayout } from '@/layouts/RootLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3.0'
        />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}
