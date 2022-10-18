import "../styles/global.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import { wrapper } from "../src/store"

const MyApp = ({ Component, pageProps}) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);
