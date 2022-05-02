import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="BasaKhujo.com: A property searching platform in Bangladesh"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BasaKhujo" key="ogsitename" />
        <meta property="og:url" content="https://www.basakhujo.com/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/nomidman/image/upload/v1651508276/icon_z4tdb7.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/nomidman/image/upload/v1651508276/icon_z4tdb7.png"
        />
        <meta
          property="og:image:alt"
          content="BasaKhujo.com: A property searching platform in Bangladesh"
        />
        <meta
          property="og:description"
          content="BasaKhujo is an accommodation solution provider platform that makes it possible to rent a house & mess without paying any brokerage."
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.webp" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
