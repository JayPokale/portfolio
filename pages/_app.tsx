import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider>
        <Box
          fontFamily="Poppins"
        >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
