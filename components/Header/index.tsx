import Link from "next/link";
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
  className="flex justify-around items-center p-4 bg-green-900 text-white"
  style={{position:"relative", justifyContent: "space-between"}}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: 'spring', stiffness: 50 }}
>
      <div className="text-2xl font-bold">Madi Tabon</div>
      <nav className="ml-auto space-x-4"
      >
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
