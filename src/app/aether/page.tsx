"use client";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { motion } from "framer-motion";
import Scroll from "../../../components/aeScroll";
import About from "../../../components/aether/about";
import CompAnal from "../../../components/aether/compAnal";
import UserPersonas from "../../../components/aether/userPersonas";
import UserResearch from "../../../components/aether/userResearch";
import Design from "../../../components/aether/design";
import Styleguide from "../../../components/aether/styleguide";
import Marketing from "../../../components/aether/marketing";
import Final from "../../../components/aether/final";
import AboutAe from "../../../components/aether/aboutAether";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import Workflow from "../../../components/aether/workflow"
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
      <Scroll />

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
            <Design />
          </section>
            
          <section className="flex flex-col">
            <Styleguide/>
            <Workflow/>
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
