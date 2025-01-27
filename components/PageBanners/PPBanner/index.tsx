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
import Oscar from "../../../public/Oscarsolo.png";

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
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-center font-bold mb-4 text-7xl">Pocket Prof.</h1>
            <h2 className="text-3xl font-semibold p-2">
              Designed and Coded Web App
            </h2>
            <h2 className="text-2xl p-2">Completed: May 2024</h2>

            <motion.div
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              animate={{
                backgroundColor: isHovered1 ? "#5b21b6" : "",
                scale: isHovered1 ? 1.25 : 1
              }}
              transition={{ ease: "backInOut" }}
              className="bg-violet-900 p-2 rounded-2xl m-4"
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
                scale: isHovered2 ? 1.25 : 1
              }}
              transition={{ ease: "backInOut" }}
              className="bg-violet-900 p-2 rounded-2xl m-4"
            >
              <a href="https://pocket-profs-a5-styleguide.vercel.app/" target="_blank">
                <p className="text-4xl">Styleguide!</p>
              </a>
            </motion.div>
          </div>

          <motion.div exit={{ opacity: 0 }}>
            <Image src={Oscar} alt="oscar" width={512} height={512} />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default PPBanner;
