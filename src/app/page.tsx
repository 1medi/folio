"use client";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <About />
      <Contact/>
      <Footer />
    </>
  );
}
