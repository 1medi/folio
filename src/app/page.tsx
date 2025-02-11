"use client";
import Banner from "../../components/PageBanners/Banner";
import Footer from "../../components/Footer";
import About from "../../components/About";
import AboutP from "../../components/About-p/index";
import Lenis from "lenis";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(() => import('../../components/InfiniteCarousel'), {
  loading: () => <p>Loading...</p>,
})

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
      <AboutP />
      <DynamicCarousel/>
      <About />
      <Footer />
    </>
  );
}
