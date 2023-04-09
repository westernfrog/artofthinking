import Overview from "@/components/Overview";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Art of Thinking Gray</title>
        <meta name="description" content="Art of Thinking Gray" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-overview">
        <div className="container my-0 my-lg-5 py-5">
          <Overview />
        </div>
      </div>
    </>
  );
}
