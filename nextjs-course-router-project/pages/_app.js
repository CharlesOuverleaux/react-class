import Layout from '../components/layout/layout'
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NFT events</title>
        <meta name="description" content="Find the best NFT events in your city" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
