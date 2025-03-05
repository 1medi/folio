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
import ACG from "../../../public/projectLogos/acgLogo.png";

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
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-center pt-8 font-bold mt-12 text-6xl">
              Awesome Card Game: Aspects of Elements (ACG)
            </h1>
            <div className="text-center p-5">
              <h2 className="text-2xl font-semibold">Game Design Project</h2>
              <h2 className="text-xl font-medium">Completed: May 2024</h2>
            </div>
            <div className="flex flex-col w-2/3 justify-center items-center m-auto">
              <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                  backgroundColor: isHovered ? "#a5681e" : "",
                  scale: isHovered ? 1.25 : 1,
                }}
                transition={{ ease: "backInOut" }}
                className="bg-[#F4A950] p-2 w-2/3 rounded-2xl m-2"
              >
                <a
                  href="https://steamcommunity.com/sharedfiles/filedetails/?id=3247582700"
                  target="_blank"
                >
                  <p className="text-2xl xl:text-4xl">On Steam Workshop!</p>
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div className="m-6 p-2" exit={{ opacity: 0 }}>
            <Image src={ACG} alt="ACG LOGO" width={512} height={512} />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ACGBanner;
