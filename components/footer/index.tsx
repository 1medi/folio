import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-4 bg-black text-white">
      <div className="flex flex-row p-4 gap-6">
        <motion.a
          href="https://github.com/1medi"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub size={32} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/madi-tabon/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin size={32} />
        </motion.a>
        <motion.a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaFileAlt size={32} />
        </motion.a>
      </div>
      <p className="text-center">
        © {new Date().getFullYear()} Madi Tabon. All rights reserved.
      </p>
    </footer>
  );
};


