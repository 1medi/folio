import Link from "next/link";
import { color, motion } from "framer-motion";
import Image from "next/image";
import Wordmark from "../Wordmark"

const Header = () => {
  return (
    <motion.header
      className="flex relative justify-between items-center p-4 bg-black text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="m-2 ">
      <Wordmark
    className="w-12 h-12"/>
      </div>

      <Link href="/" className="text-2xl font-bold">Madi Tabon</Link>
      <nav className="ml-auto space-x-4">
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </motion.header>
  );
}

export default Header;