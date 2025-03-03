"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import Parallax from "../../../components/Parallax/index";
import About from "../../../components/Aether/About";
import CompAnal from "../../../components/Aether/CompAnal";
import UserPersonas from "../../../components/Aether/UserPersonas";
import UserResearch from "../../../components/Aether/UserResearch";
import Design from "../../../components/Aether/Design";
import Styleguide from "../../../components/Aether/Styleguide";
import Marketing from "../../../components/Aether/Marketing";
import Final from "../../../components/Aether/Final";
import AboutAe from "../../../components/Aether/AboutAether";
import DesignProgression from "../../../components/Aether/DesignProgression";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import Workflow from "../../../components/Aether/Workflow"
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

      <main className="min-h-screen "> 
        <section className="inner-container ">
          <section className="xl:grid xl:grid-cols-2 xl:m-4  ">
            <div className="flex justify-center items-center pt-10">
              <About />
            </div>
            <div className="lg:pt-10 ">
              <AboutAe />
            </div>
          </section>
          <section className="xl:mx-4 xl:my-8">
            <CompAnal />
            <UserPersonas />
            <UserResearch/>
          </section>
            
          <section className="flex flex-col lg:flex-row">
            <Design />
            <Styleguide/>
          </section>
          <section>
            <Workflow/>
            <DesignProgression/>
          </section>
          <section>
            <Marketing />
            <Final />
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
        </section>
      </main>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Aether;
