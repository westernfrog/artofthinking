import Header from "@/components/Header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Head>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/5725/5725105.png"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://kit.fontawesome.com/5818d7bece.js"
        crossorigin="anonymous"
      ></Script>
      <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></Script>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
