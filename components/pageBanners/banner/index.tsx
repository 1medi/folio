import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt, FaArrowDown } from "react-icons/fa";
import Tile from "../../tile";

const duration = 1;
const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};
const COLORS = ["#1E150A", "#004f2d", "#000000"];
const colors = ["#C9C19F", "#EDF7D2", "#EDF7D2", "#EB5160"];

const Banner = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${COLORS[1]} 30%, ${color}`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <main className="w-full h-full relative overflow-hidden">
      <motion.section
        className="about-section w-full grid grid-cols-10 h-screen overflow-y-clip"
        style={{
          backgroundImage,
        }}
      >
        {Array.from({ length: 20 * 12 }).map((i, index) => (
          <Tile key={index} />
        ))}
      </motion.section>
      <div
        className="pointer-events-none absolute inset-0
      flex flex-col gap-5 items-center justify-center z-10 mb-10 
      "
      >
        <motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: duration }}
            className="z-10 text-center text-5xl sm:text-7xl lg:text-9xl font-bold m-auto text-white"
          >
            Hi! I'm Madi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: duration }}
            className="text-xl sm:text-2xl lg:text-4xl p-4 lg:m-2 xl:m-8 desktop:m-12 xl:text-3xl text-center text-white"
          >
            A Front-end developer with a strong passion in modern web
            technologies. With an unwavering interest in user-friendly designs
            and pushing boundaries.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-5 mb-12 m-8 p-8 pointer-events-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="https://github.com/1medi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: 1.5 }}
            className="pointer-events-auto"
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaGithub size={64} className="fill-white" />
            </motion.div>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/madi-tabon/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: 1.75 }}
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaLinkedin size={64} className="fill-white" />
            </motion.div>
          </motion.a>
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaFileAlt size={64} className="fill-white" />
            </motion.div>
          </motion.a>
        </motion.div>
        <motion.a href="#projects" transition={transition}>
          <motion.div
            className="absolute bottom-0 left-0 right-0 pointer-events-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: 2.25 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-row justify-center mb-12 sm:mb-0 items-center"
              whileHover={{ color: "#FFFFFF" }}
            >
              <FaArrowDown className="m-2" /> More Info Below!
            </motion.div>
          </motion.div>
        </motion.a>
      </div>
    </main>
  );
};

export default Banner;
