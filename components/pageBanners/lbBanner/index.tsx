import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import LBLogo from "../../../public/projectLogos/lutongBahayLogo.png";
import Image from "next/image";

const COLORS = [" #10254E", "#E98704", "#F0AB1A"]; // Shades from the mascot
const LBBanner = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${COLORS[1]} 30%, ${color}`;

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
            <h1 className="text-center font-bold text-7xl flex flex-row">
              Lutong Bahay{" "}
              <span>
                <div className="w-[96px] pl-4">
                <Image alt="LB Logo" src={LBLogo} priority/>
                </div>
              </span>
            </h1>
            <h2 className="text-3xl font-semibold p-2">
              Designed and Coded Web App
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
                <a href="https://lutong-bahay.vercel.app/" target="_blank">
                  <p className="text-4xl">Live App</p>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default LBBanner;

