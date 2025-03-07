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
import OscarLogo from "../../../public/projectLogos/pocketProfLogo.webp";

const COLORS = ["#5C47CC", "#8572F4", "#F2E9FF"]; // Shades from the mascot
const PPBanner = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${COLORS[1]} 50%, ${color}`;

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
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col mt-24 justify-center items-center">
          <div className="flex flex-col">
            <motion.div
              className="m-auto justify-center items-center w-[512px] p-4"
              exit={{ opacity: 0 }}
            >
              <Image alt="oscarlogo" src={OscarLogo} priority/>
            </motion.div>
            <h2 className="text-3xl font-semibold p-2">
              Designed and Coded Web App
            </h2>
            <h2 className="text-2xl p-2">Completed: May 2024</h2>

            <div className="flex flex-col justify-center items-center">
              <motion.div
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                animate={{
                  backgroundColor: isHovered1 ? "#5b21b6" : "",
                  scale: isHovered1 ? 1.15 : 1,
                }}
                transition={{ ease: "backInOut" }}
                className="bg-violet-900 p-2 rounded-2xl m-4 w-1/2 "
              >
                <a href="https://www.pocketprof.online/" target="_blank">
                  <p className="text-4xl">Live App</p>
                </a>
              </motion.div>
              <motion.div
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                animate={{
                  backgroundColor: isHovered2 ? "#5b21b6" : "",
                  scale: isHovered2 ? 1.15 : 1,
                }}
                transition={{ ease: "backInOut" }}
                className="bg-violet-900 p-2 rounded-2xl m-4 w-1/2"
              >
                <a
                  href="https://pocket-profs-a5-styleguide.vercel.app/"
                  target="_blank"
                >
                  <p className="text-4xl">Styleguide!</p>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default PPBanner;

