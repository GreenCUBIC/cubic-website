import { ReactNode } from "react";
import * as React from "react";
//import Head from "next/head";
import Header from "./Header";
import { Helmet } from "react-helmet";
import * as styles from "./Layout.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className={`${styles.global}`}>
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="/stylesheets/fontawesome/css/all.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
      ></link>
      <link rel="stylesheet" href="/stylesheets/globals.css"></link>
    </Helmet>
    <Header />
    <div style={{ flex: 20 }}>{children}</div>
    <footer className={`${styles.footer}`}>
      <span>Designed by Francois Charih</span>
    </footer>
  </div>
);

export default Layout;
