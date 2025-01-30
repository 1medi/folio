import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt, FaArrowDown } from "react-icons/fa";

const COLORS = ["#473B1F", "#51432A", "#FFFFFF"];
const Banner = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #004f2d 50%, ${color}`;

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
    <div className="-z-80  w-full h-full overflow-hidden">
      <motion.section
        key={"banner"}
        exit={{ opacity: 0 }}
        className="about-section min-h-screen relative justify-center shadow-2xl -z-80"
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
        <h1 className="text-center text-7xl font-bold mb-2 text-white">
          Hi! I'm Madi
        </h1>
        <div className="w-1/2 mr-auto ml-auto">
          <p className="text-2xl m-4 text-center text-white">
            A Front-end developer with a strong passion in modern web
            technologies. With an unwavering interest in user-friendly designs
            and pushing boundaries.
          </p>
        </div>
        <div className="flex justify-center gap-5 p-3">
          <motion.a
            href="https://github.com/1medi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={64} className="fill-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/madi-tabon/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={64} className="fill-white" />
          </motion.a>
          <motion.a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaFileAlt size={64} className="fill-white" />
          </motion.a>
        </div>
        <motion.a href="#projects">
          <div className="absolute bottom-10 left-0 right-0">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-row justify-center items-center"
              whileHover={{ color: "black" }}
            >
              <FaArrowDown />
              <motion.p whileHover={{ color: "black" }} className="p-4">
                More Info Below!
              </motion.p>
            </motion.div>
          </div>
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Banner;
