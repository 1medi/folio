"use client";
import Banner from "../../components/PageBanners/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
// import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import AboutP from "../../components/About-p/index";
import Carousel from "../../components/InfiniteCarousel";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])
  return (
    <>
      <Banner />
      {/* <Header /> */}
      <AboutP />
      {/* <Gallery /> */}
      <Carousel/>
      <About />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
