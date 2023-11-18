import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Hi. I am Piotr Matyjasik, explore my portfolio—a compilation of projects intertwined with a detailed overview of my professional experience and skills.'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Piotr Matyjasik' />
        <meta
          property='og:description'
          content='Hi. I am Piotr Matyjasik, explore my portfolio—a compilation of projects intertwined with a detailed overview of my professional experience and skills.'
        />
        <meta property='og:image' content='/og-image.png' />
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
