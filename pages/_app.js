import '../styles/globals.css'
import { AppProps } from 'next/app'
import { SessionProvider, sessionProvider } from 'next-auth/react';
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }, AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp
