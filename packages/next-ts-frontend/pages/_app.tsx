// _app.tsx
import '@styles/globals.css';

import { FC } from 'react';
import { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
