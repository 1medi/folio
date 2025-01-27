import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";
import ACG from "../../../public/ACG-Logo.png";

const COLORS = ["#D8BF9D", "#007EBC"];
const ACGBanner = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(75% 75% at 50% 0%, #F4A950 50%, ${color}`;

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <>
      <motion.section
        key={"banner"}
        // exit={{ opacity: 0 }}
        className="about-section min-h-screen relative justify-center shadow-2xl"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage,
          opacity,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-center font-bold mb-4 text-7xl">
              Awesome Card Game:{" "}
              <p className="text-6xl">Aspects of Elements (ACG)</p>
            </h1>
            <div className="text-center p-5">
              <h2>Game Design Project</h2>
              <h2>Completed: May 2024</h2>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-center items-center">
                <a
                  href="https://steamcommunity.com/sharedfiles/filedetails/?id=3247582700"
                  target="_blank"
                >
                  <motion.div className="p-4 bg-black rounded-xl">
                    <h3>Steam Workshop</h3>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
          <motion.div className="m-8" exit={{ opacity: 0 }}>
            <Image src={ACG} alt="ACG LOGO" width={512} height={512} />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ACGBanner;
