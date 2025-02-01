"use client";
import Banner from "../../components/PageBanners/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
// import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import AboutP from "../../components/About-p/index";
import Carousel from "../../components/InfiniteCarousel";

export default function Home() {
  return (
    <>
      <Banner />
      {/* <Header /> */}
      <AboutP />
      {/* <Gallery /> */}
      <Carousel/>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
