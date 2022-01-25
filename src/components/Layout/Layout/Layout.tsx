import Head from "next/head";
import Script from "next/script";
import React from "react";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bhaktij Koli's Website" />
        <meta
          name="keywords"
          content="Bhaktij Koli, Full Stack Developer, Freelancer, Web Developer, Android Developer"
        />
        <meta name="author" content="Bhaktij Koli <bhaktijkoli121@gmail.com>" />
        <meta name="robots" content="index, follow" />
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
      <Script src="https://client.crisp.chat/l.js" />
    </React.Fragment>
  );
};

export default Layout;
