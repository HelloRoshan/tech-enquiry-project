import "../styles/global.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import { wrapper } from "../src/store"
import { RouteGuard } from '../components/RouteGuard';

const MyApp = ({ Component, pageProps}) => (
  <RouteGuard>
      <Component {...pageProps} />
  </RouteGuard>
)

export default wrapper.withRedux(MyApp);
