"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import Parallax from "../../../components/Parallax/index";
import Section1 from "../../../components/Aether/About";
import Section2 from "../../../components/Aether/CompAnal";
import UserPersonas from "../../../components/Aether/UserPersonas";
import Section4 from "../../../components/Aether/UserResearch";
import Section5 from "../../../components/Aether/Design";
import Section6 from "../../../components/Aether/Styleguide";
import Section7 from "../../../components/Aether/Marketing";
import Section8 from "../../../components/Aether/Final";
import AboutAe from "../../../components/Aether/AboutAether";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";

const Aether = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Parallax />
      <main className=" min-h-screen snap-y ">
        <section className="snap-start snap-normal mt-32 xl:grid xl:grid-cols-2 xl:my-32 xl:py-20 ">
        <div className="snap-start snap-normal h-full xl:my-auto">
          <Section1 />
        </div>
        <div className="snap-normal">
        <AboutAe/>
        </div>

        </section>
        <section className="snap-start snap-normal p-8 xl:mt-36 xl:py-32">
          <Section2 />
        </section>
        <section className="snap-start snap-normal flex flex-col m-4 h-full xl:mt-32 xl:py-20">
          <UserPersonas />
          <div className="lg:snap-start snap-normal h-full xl:mt-32 xl:py-20">
            <Section4 />
          </div>
        </section>
        <section className="snap-start snap-normal flex flex-col lg:flex-row h-full xl:mt-32 xl:py-20">
          <Section5 />
          <Section6 />
        </section>
        <section className="snap-start snap-normal h-full xl:mt-32 xl:py-20">
          <Section7 />
          <Section8 />
        </section>
        <div className="m-4">
        <motion.button
          className={`m-auto bg-black rounded-full p-4 z-50 items-center text-lg flex gap-2`}
          onClick={scrollToTop}
        >
          BACK TO TOP
          <IoIosArrowUp className="inline-block h-4 w-4" />
        </motion.button>
        </div>

      </main>
      <div className="snap-start snap-normal">
        <Footer />
      </div>
    </>
  );
};

export default Aether;
