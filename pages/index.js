import About from "@/components/About";
import Footer from "@/components/Footer";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [className, setClassName] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setClassName("vh-100");
      } else {
        setClassName("");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>The Art of Thinking Gray</title>
        <meta name="description" content="Art of Thinking Gray" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`bg-overview ${className}`}>
        <div className="container my-0 mt-lg-5 mb-lg-5 pt-5">
          <Overview />
        </div>
      </div>
      <div className="container my-4 my-lg-0">
        <About />
        <hr />
        <Projects />
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}
