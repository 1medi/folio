// @ts-nocheck
"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import HifiPhone from "../../components/PhoneScreens/HifiPhone";
import HifiPhone2 from "../../components/PhoneScreens/HifiPhone2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons

const items: Item[] = [
  {
    id: 0,
    src: HifiPhone,
    description: "this describes the first slide",
  },
  {
    id: 1,
    src: HifiPhone2,
    description: "this describes the second slide",
  },
  {
    id: 2,
    src: HifiPhone,
    description: "this describes the third slide",
  },
  {
    id: 3,
    src: HifiPhone2,
    description: "this describes the fourth slide",
  },
];

type Item = {
  id: number;
  src: React.FC;
  description: string;
};

function LofiCarousel() {
  const [activeItem, setActiveItem] = useState(items[0]);
  const carousel = useRef(null);

  const handleNext = () => {
    const nextIndex = (activeItem.id + 1) % items.length;
    setActiveItem(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (activeItem.id - 1 + items.length) % items.length;
    setActiveItem(items[prevIndex]);
  };

  return (
    <>
      <motion.div
        layoutId={"activeItems"}
        className="rounded-md w-fit mt-16 pb-4 gap-2 items-center cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.figure key={activeItem.id} className="flex flex-col p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  type: "ease",
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  type: "ease",
                  ease: "easeInOut",
                  duration: 0.2,
                },
              }}
            >
              <div className="flex justify-center items-center">
                <div className="flex flex-col ml-4">
                  <button
                    onClick={handlePrev}
                    className="bg-transparent p-2 rounded m-6 flex items-center"
                  >
                    <FaArrowLeft className="text-gray-800" />
                  </button>
                </div>
                {React.createElement(activeItem.src, {
                  images: items.map((item) => item.src),
                  activeImageIndex: activeItem.id,
                  width: 400,
                  height: 400,
                })}
                <div className="flex flex-col ml-4">
                  <button
                    onClick={handleNext}
                    className="bg-transparent p-2 rounded m-6 flex items-center"
                  >
                    <FaArrowRight className="text-gray-800" />
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.figcaption
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  type: "ease",
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  type: "ease",
                  ease: "easeInOut",
                  duration: 0.2,
                },
              }}
              className="mt-12"
            >
              {activeItem.description}
            </motion.figcaption>
          </motion.figure>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default LofiCarousel;
