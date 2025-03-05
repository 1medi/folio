import { motion } from "framer-motion";

const colors = ["#C9C19F", "#EDF7D2", "#EDF7D2", "#EB5160"];
const Tile = () => {
  return (
    <motion.div
      className="aspect-square border-neutral-900 transition-colors duration-100"
      whileHover={{
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      }}
    />
  );
};

export default Tile;

