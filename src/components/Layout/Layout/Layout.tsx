import Head from "next/head";
import React from "react";
import Menu from "../Menu/Menu";

interface LayoutProps {
    title?: string;
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ title, children }: LayoutProps) => {
    return (
        <React.Fragment>
            <Head>
                <title>{title || "Bhaktij Koli - Full Stack Developer, Freelancer"}</title>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Bhaktij Koli's Website" />
                <meta name="keywords" content="Bhaktij Koli, Full Stack Developer, Freelancer, Web Developer, Android Developer" />
                <meta name="author" content="Bhaktij Koli <bhaktijkoli121@gmail.com>" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#5A40CA" />
                <meta name="msapplication-navbutton-color" content="#5A40CA" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#5A40CA" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
            </Head>
            <Menu />
            {children}
        </React.Fragment>
    )
}

export default Layout;