import Header from "@/components/Header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://kit.fontawesome.com/5818d7bece.js"
        crossorigin="anonymous"
      ></Script>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
