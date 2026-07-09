import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='has-data-[open=true]:overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
