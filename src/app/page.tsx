"use client";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
// import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import AboutP from "../../components/About-p";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AboutP />
      {/* <Gallery /> */}
      <About />
      <Contact />
      <Footer />
    </>
  );
}
