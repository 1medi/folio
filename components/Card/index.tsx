import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface CarouselCardProps {
  image: string;
  title: string;
  description: string;
}
export const Card: React.FC<CarouselCardProps> = ({ image, title, description }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      className="relative overflow-hidden h-[300px] lg:h-[700px] min-w-[200px] lg:w-[600px] desktop:h-[800px] bg-slate-400 flex justify-center items-center rounded-xl"
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute  pointer-events-none  h-full w-full" />
            <div className="bg-[#ffc5d8da] h-full w-full flex justify-center items-center">
              <div className="flex flex-col flex-wrap">
                <p className="m-auto text-black lg:text-5xl p-4">{title}</p>
                <p className="m-auto text-black lg:text-4xl p-4 text-center">{description}</p>
                <motion.h1
                  className="bg-white m-auto text-black font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center g-[0.5ch] hover:opacity-75"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  exit={{ y: 10 }}
                  onClick={() => setIsOpen(true)}
                >
                  <span>Click Here!</span>
                  <FaArrowRight className="h-4 w-4 p-1" />
                </motion.h1>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
      <Image src={image} priority alt={"An image"} fill style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default Card;
