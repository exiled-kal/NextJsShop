import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {

  },[])
  
  return <Component {...pageProps} />;
}

export default MyApp;
