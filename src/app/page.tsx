"use client";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <About />
      <Footer />
    </>
  );
}
