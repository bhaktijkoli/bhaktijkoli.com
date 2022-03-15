import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

interface LayoutProps {
  title?: string;
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ title, children }: LayoutProps) => {
  React.useEffect(() => {
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = "a015e737-38af-4ba7-8bbb-196c32d291ef";
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>
          {title || "Bhaktij Koli - Full Stack Developer, Freelancer"}
        </title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="height=device-height,
                      width=device-width, initial-scale=1.0,
                      minimum-scale=1.0, maximum-scale=1.0,
                      user-scalable=no, target-densitydpi=device-dpi"
        ></meta>
        <meta name="description" content="Bhaktij Koli's Website" />
        <meta
          name="keywords"
          content="Bhaktij Koli, Full Stack Developer, Freelancer, Web Developer, Android Developer"
        />
        <meta name="author" content="Bhaktij Koli <bhaktijkoli121@gmail.com>" />
        <meta name="robots" content="index, follow" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#5A40CA" />
        <meta name="msapplication-navbutton-color" content="#5A40CA" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5A40CA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Menu />
      {children}
      <Footer />
      <Script src="https://client.crisp.chat/l.js" />
    </React.Fragment>
  );
};

export default Layout;
