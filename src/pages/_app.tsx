import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { css } from '@emotion/react';
import { RecoilRoot } from 'recoil';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
