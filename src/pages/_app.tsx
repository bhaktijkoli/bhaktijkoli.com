import '../styles/index.scss'
import type { AppProps } from 'next/app'
import config from 'react-reveal/globals';

config({ ssrFadeout: true, ssrReveal: true });


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
