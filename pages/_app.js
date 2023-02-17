import { ThemeProvider } from "next-themes";
import Script from "next/script";

import { Navbar, Footer } from "../components";
import { NFTProvider } from "../context/NFTContext";
import "../styles/globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider) => new Web3Provider(provider);
const App = ({ Component, pageProps }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <NFTProvider>
      <ThemeProvider attribute="class">
        <div className="dark:bg-nft-dark bg-white min-h-screen">
          <Navbar />
          <div className="pt-65">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
        <Script
          src="https://kit.fontawesome.com/9555f8b288.js"
          crossOrigin="anonymous"
        />
      </ThemeProvider>
    </NFTProvider>
  </Web3ReactProvider>
);
export default App;
