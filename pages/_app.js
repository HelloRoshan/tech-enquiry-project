import "../styles/global.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Head from 'next/head';
import { wrapper } from "../src/store";
import { RouteGuard } from '../components/RouteGuard';

const MyApp = ({ Component, pageProps}) => (
  <RouteGuard>
      <Head>
        <title>Fun With Maths</title>
      </Head>
      <Component {...pageProps} />
  </RouteGuard>
)

export default wrapper.withRedux(MyApp);
