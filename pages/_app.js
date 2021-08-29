import { ZealProvider } from "@zeal-ui/core";
import Head from 'next/head';
import { headerContents, sidebarContents, footerContents } from "../utils/NavigationItems";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ZealProvider headerContents={headerContents} sidebarContents={sidebarContents} footerContents={footerContents}>
      <Head>
        <title>Ganesh Kumar</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="My space on the web where I share my learnings and showcase my work."
        />
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="/favicon.ico"
        />
      </Head>
      <Component {...pageProps} />
    </ZealProvider>
  );
};

export default MyApp;