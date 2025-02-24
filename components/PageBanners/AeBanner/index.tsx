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

const COLORS = ["#5E86A0", "#1B425E", "#A7C6DD"]; // Shades from the mascot
const AEBanner = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${COLORS[1]} 30%, ${color})`;

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
        className="about-section min-h-screen relative justify-center shadow-2xl"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col mt-24 justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-center font-bold mb-4 text-7xl flex flex-row justify-center">
              Aether
            </h1>
            <h2 className="text-3xl font-semibold p-2">
              Designed and Coded Mobile App
            </h2>
            <h2 className="text-2xl p-2">Completed: December 2024</h2>

            <div className="flex flex-col justify-center items-center">
              <motion.div
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                animate={{
                  backgroundColor: isHovered1 ? "#0b243f" : "",
                  scale: isHovered1 ? 1.15 : 1,
                }}
                transition={{ ease: "backInOut" }}
                className="bg-[#012d5e]  p-2 rounded-2xl m-4 w-1/2 "
              >
                <a
                  href="https://aether-landing-seven.vercel.app/"
                  target="_blank"
                >
                  <p className="text-4xl">Landing Page</p>
                </a>
              </motion.div>
              <motion.div
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                animate={{
                  backgroundColor: isHovered2 ? "#0b243f" : "",
                  scale: isHovered2 ? 1.15 : 1,
                }}
                transition={{ ease: "backInOut" }}
                className="bg-[#012d5e]  p-2 rounded-2xl m-4 w-1/2 "
              >
                <a href="https://aether-blog.vercel.app/" target="_blank">
                  <p className="text-4xl">Blog</p>
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

export default AEBanner;
