import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";

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
    <>
      <motion.section
        key={"banner"}
        exit={{ opacity: 0 }}
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
        <h1
          className="text-center font-bold mb-4"
          style={{ fontSize: "6rem", lineHeight: "1" }}
        >
          Hi! I'm Madi
        </h1>
        <p className="text-2xl m-12 text-center text-white">
          Experienced front-end developer with expertise in modern web
          technologies. Passionate about user-friendly designs and pushing
          boundaries.
        </p>
        <div className="flex justify-center gap-5 p-3">
          <motion.a
            href="https://github.com/1medi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={64} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/madi-tabon/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={64} />
          </motion.a>
          <motion.a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaFileAlt size={64} />
          </motion.a>
        </div>
      </motion.section>
    </>
  );
};

export default Banner;
