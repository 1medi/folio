"use client"; // Needed for Next.js App Router

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Phone from "../../public/Pocket-Prof/PhoneNoBKG.png";
import { PPScreens } from "@/app/utils/data";

const PhoneSimulator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PPScreens.length);
    }, 6000); // Change screen every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-[800px] mx-auto overflow-hidden"> {/* Apply overflow-hidden here */}
      {/* Screens (Background) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ height: "100%" }}
          >
            <Image
              src={PPScreens[index]}
              alt="App Screen"

              className="object-fill " // Ensure the image covers the area and fits nicely
              style={{ aspectRatio: '1.2/2.45', borderRadius: '37px', }} // Adjust this ratio based on your image aspect
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Phone Frame (Foreground) */}
      <Image
        src={Phone}
        alt="Phone Frame"
        fill
        className="absolute z-10 object-cover"
      />
    </div>
  );
};

export default PhoneSimulator;
