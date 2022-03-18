import "../styles/index.scss";
import type { AppProps } from "next/app";
import config from "react-reveal/globals";
import ReactGA from "react-ga";
import * as React from "react";
import { useRouter } from "next/router";
ReactGA.initialize(String(process.env.NEXT_PUBLIC_GA), {
  debug: process.env.NODE_ENV === "development",
});

config({ ssrFadeout: true, ssrReveal: true });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  React.useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      console.log(url);
      ReactGA.pageview(window.location.pathname + window.location.search);
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
