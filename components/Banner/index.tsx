import React, { useState, useEffect } from "react";
import ContactModal from "../ContactModal";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";

const COLORS = ["#a49e8d", "#004f2d", "#713E5A", "#A8C686"];
const Banner = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // rounded-lg shadow-md text-center
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 25% 0%, #AABD8C 25%, ${color}`;

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
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <motion.section
      key={"banner"}
      exit={{ opacity:0 }}
        className="about-section min-h-screen relative justify-center"
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
        <div className="flex justify-center gap-4 p-4">
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
          <motion.button
            onClick={() => setModalOpen(true)}
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope size={64} />
          </motion.button>
        </div>
      </motion.section>
    </>
  );
};

export default Banner;
