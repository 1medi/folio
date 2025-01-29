import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";
import Oscar from "../../Animation/Oscar";

const COLORS = ["#5C47CC", "#8572F4", "#F2E9FF"]; // Shades from the mascot

const PPBanner = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${COLORS[1]} 50%, ${color}`;
  
  const [isBrowser, setIsBrowser] = useState(false); // To track if we're in the browser

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Only run this effect on the client-side
  useEffect(() => {
    setIsBrowser(true); // This will run only in the browser
  }, []);

  useEffect(() => {
    if (isBrowser) {
      animate(color, COLORS, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      });
    }
  }, [isBrowser]);

  if (!isBrowser) return null; // Prevent rendering SSR on the server-side

  return (
    <>
      <motion.section
        key={"banner"}
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
            <h1 className="text-center font-bold mb-4 text-7xl flex flex-row">
              Pocket Prof <Oscar />
            </h1>
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

          <motion.div
            className="m-auto justify-center items-center w-256 h-256"
            exit={{ opacity: 0 }}
          ></motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default PPBanner;
