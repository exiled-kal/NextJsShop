import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if(jssS)
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
