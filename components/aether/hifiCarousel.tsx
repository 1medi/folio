// @ts-nocheck
"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import AppComparison from "../comparisonSliders/aeAppComparison"
import AppComparison2 from "../comparisonSliders/aeAppComparison2"
import AppComparison3 from "../comparisonSliders/aeAppComparison3"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons

const items: Item[] = [
  {
    id: 0,
    src: AppComparison,
    description: "We went with a color change to improve contrast and decluttered the UI",
  },
  {
    id: 1,
    src: AppComparison2,
    description: "this describes the second slide",
  },
  {
    id: 2,
    src: AppComparison3,
    description: "Instead of inline simplification, we decided to create a bottam modal to display all paraphrases within the image / file.",
  },
];

type Item = {
  id: number;
  src: React.FC;
  description: string;
};

function HifiCarousel() {
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
        className="hifiCarousel rounded-md w-fit mt-8 pb-4 gap-2 items-center cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.figure
            key={activeItem.id}
            className="flex flex-col p-4 backdrop-blur-sm"
          >
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
              <div className="m-auto flex justify-center items-center">
                <div className="flex flex-col ml-4">
                  <button
                    onClick={handlePrev}
                    className="bg-transparent p-2 rounded xl:m-6 flex items-center"
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
                    className="bg-transparent p-2 rounded xl:m-6 flex items-center"
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
              className="text-center"
            >
              {activeItem.description}
            </motion.figcaption>
          </motion.figure>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default HifiCarousel;

