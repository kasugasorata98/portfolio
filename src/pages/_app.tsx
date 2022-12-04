import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Jeromy Kho [Software Engineer]</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default App;
