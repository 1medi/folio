import { motion } from "framer-motion"
import Lutong from "../../public/BAHAY.png"

const Tile = () => {
  return (
    <motion.div
    className="aspect-square bg-[#004f2d]  border-neutral-900 transition-colors duration-100"
    whileHover={{
      backgroundColor: "#004f2da1"
    }}
    />
  )
}

export default Tile
// "use client"
// const Tile = () => {
//   return (
//     <div
//       className="aspect-square bg-cover bg-center border-neutral-900 transition-colors duration-100 hover:opacity-80"
//       style={{ backgroundImage: "url('/lutong.png')" }}
//     />
//   );
// };

// export default Tile;
