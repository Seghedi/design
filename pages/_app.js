import '../styles/globals.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <title>seghedi.com - Open source design</title>
      <link rel="shortcut icon" type="image/png" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png"/>
      <link rel="apple-touch-icon" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png" />
      <link rel="mask-icon" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png" />
      <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png" />
      <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png" />
      <link rel="shortcut icon" href="https://scloud-assets.s3.eu-central-1.amazonaws.com/site_icon.png" />
    </Head>
  return <Component {...pageProps} />
}

export default MyApp
