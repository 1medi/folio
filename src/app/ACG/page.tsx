"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import ACGVideo from "../../../components/ACGVideo"
import { getImageProps } from "next/image";
import NextVideo from "next-video";
import AcgV from "../../../videos/acgpromo.mp4"
 
function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

const ACG = () => {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 1920,
    height: 1080,
    src: "/ACG/acg1.png",
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = {
    height: "100vh",
    width: "100vw",
    backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 ">
        <motion.section
          key={"banner"}
          exit={{ opacity: 0 }}
          className="about-section min-h-screen relative justify-center m-4"
          style={style}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-left p-8 text-8xl font-bold">
            Awesome Card Game: <br /> Aspects of Elements{" "}
          </h1>
        </motion.section>
        {/* <div className="p-4 m-12  rounded-xl">
          <Image src={ACG1}  alt="acglogo" />
        </div> */}
        <motion.section
        className="pr-16 pl-16"
        >
          <div className="tools-used p-12">
          <h2 className="text-3xl">Tools Used</h2>
          <ul className="p-4">
            <li>Figma</li>
            <li>Tabletop Simulator</li>
          </ul>
          </div>
          <div className="about p-12">
            <h2 className="text-3xl">What is ACG?</h2>
            <p>
              In ACG: Aspect of Elements, players engage in a strategic card
              game where they command elemental forces in turn-based battles.
              Choose your elemental affinity wisely – fire, water, earth, or air
              – as each offers unique strengths and abilities. Build your deck
              strategically, combining spells, creatures, and artifacts to
              outmaneuver your opponents.
            </p>
          </div>

          <div className="proj-ideation p-12">
            <h2 className="text-3xl">Project Ideation</h2>
            <div>
              <NextVideo src={AcgV}/>
            </div>
          </div>
          <div className="proj-outcome p-12">
            <h2 className="text-3xl">Outcome</h2>
          </div>
        </motion.section>

        <motion.section>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default ACG;
