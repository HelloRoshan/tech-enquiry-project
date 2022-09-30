import Head from "next/head";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <Component {...pageProps} />
   </div>
  )
}