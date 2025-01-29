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
    }, 2000); // Change screen every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-[600px] mx-auto">
      {/* Screens (Background) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={PPScreens[index]}
              alt="App Screen"
              fill
              className="object-cover"
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
