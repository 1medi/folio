import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="flex justify-around items-center p-4 bg-green-900 text-white"
      style={{ position: "relative", justifyContent: "space-between" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <Link href="/" className="text-2xl font-bold">Madi Tabon</Link>
      <nav className="ml-auto space-x-4">
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
      </nav>
    </motion.header>
  );
}

export default Header;