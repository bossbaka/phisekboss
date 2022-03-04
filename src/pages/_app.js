import "styles/globals.css";
import Layout from "components/Layout";
import { ChakraProvider, Spinner, useColorModeValue } from "@chakra-ui/react";
import customTheme from "styles/theme";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   router.events.on("routeChangeStart", (url) => {
  //     //console.log("Route is changing");
  //     setLoading(true);
  //   });
  //   router.events.on("routeChangeComplete", (url) => {
  //     //console.log("Route is changed");
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <ChakraProvider theme={customTheme}>
        {/* {loading && (
          <BgSpinner>
            <Spinner
              size="xl"
              pos="absolute"
              top="0"
              right="0"
              bottom="0"
              left="0"
              margin="auto"
            />
          </BgSpinner>
        )} */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={router.asPath}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            type: "tween",
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

const BgSpinner = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9999;
  background-color: ${() =>
    useColorModeValue("rgba(235, 235, 235)", "rgba(26, 26, 26)")};
`;
