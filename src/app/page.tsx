"use client";
import Banner from "../../components/PageBanners/Banner";
import Footer from "../../components/Footer";
import About from "../../components/About";
import AboutP from "../../components/About-p/index";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(() => import('../../components/InfiniteCarousel'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {

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
