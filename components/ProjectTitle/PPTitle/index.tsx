import React, { useState } from "react";
import First from "/public/Oscar.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Title = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.a
        className="title-container p-4 flex-wrap relative justify-center items-center flex flex-col  no-underline"
        href="/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "#656384" : "",
        }}
        transition={{ ease: "backInOut" }}
      >
        <div className="flex flex-row flex-wrap relative justify-center items-center">
          <h1 className="font-bold p-4 sm:text-4xl md:text-7xl lg:text-8xl xl:9xl">
            Pocket
          </h1>
          <motion.img
            src={First.src}
            height={512}
            width={512}
            animate={{
              width: isHovered ? "12rem" : "0rem",
              opacity: isHovered ? "100%" : "0%",
              padding: isHovered ? "0rem 0.75rem" : "",
            }}
            alt="aether"
          />
          <h1 className="font-bold p-4 sm:text-4xl md:text-7xl lg:text-8xl xl:9xl">
            Prof
          </h1>
        </div>
        <motion.p
          animate={{
            opacity: isHovered ? "100%" : "0%",
          }}
          className="text-center p-4 text-2xl font-medium"
        >
          Learn More!
        </motion.p>
      </motion.a>
    </>
  );
};

export default Title;
