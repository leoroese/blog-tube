/* eslint-disable react/jsx-props-no-spreading */
// _app.tsx
import '@styles/globals.css';

import { FC } from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
};

export default MyApp;
