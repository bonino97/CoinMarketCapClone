import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { GunProvider } from "../context/gunContext";
import { CoinMarketProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  console.log(
    "serverUrl = " + process.env.NEXT_PUBLIC_SERVER,
    "appId = " + process.env.NEXT_PUBLIC_APP_ID
  );
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  );
}

export default MyApp;
