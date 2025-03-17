// @ts-nocheck
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    id: 0,
    src: "/aether/aetherBrochure.webp",
  },
  {
    id: 1,
    src: "/aether/aetherBrochure2.webp",
  },
];

type Item = {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
};

export default function QuackCarousel() {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <>
      <motion.div
        layoutId={"activeItems"}
        className="rounded-md w-fit m-4 pb-4 gap-2 items-center cursor-auto "
        onClick={(e) => e.stopPropagation()}
      >
        <>
          {items.map((tab: any, index) => (
            <section key={tab.id}>
              <AnimatePresence mode="popLayout" initial={false}>
                {tab.id === activeItem.id && (
                  <motion.figure
                    key={tab?.id}
                    className="p-4 backdrop-blur-sm"
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
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`absolute left-[-40px] top-1/2 text-black ${activeItem.id === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        onClick={() =>
                          activeItem.id !== 0 && setActiveItem(items[0])
                        }
                        disabled={activeItem.id === 0}
                        aria-label="Previous page"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 12H5"></path>
                          <path d="M12 19l-7-7 7-7"></path>
                        </svg>
                      </motion.button>
                      <Image
                        src={activeItem.src}
                        width={1000}
                        height={1000}
                        alt="preview_img"
                        className=" object-contain w-full  desktop:h-[800px] mx-auto rounded-md"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`absolute right-[-40px] top-1/2  text-black ${activeItem.id === items.length - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        onClick={() =>
                          activeItem.id !== items.length - 1 &&
                          setActiveItem(items[1])
                        }
                        disabled={activeItem.id === items.length - 1}
                        aria-label="Next page"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </motion.button>
                    </motion.div>
                  </motion.figure>
                )}
              </AnimatePresence>
            </section>
          ))}
        </>
      </motion.div>
    </>
  );
}
