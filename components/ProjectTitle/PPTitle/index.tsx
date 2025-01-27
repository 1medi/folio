import React, { useState } from "react";
import First from "/public/Oscar.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Title = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.a
        className="title-container p-2 flex-wrap relative justify-center items-center flex flex-col  no-underline"
        href="/Pocket-Prof"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "#656384" : "",
        }}
        transition={{ ease: "backInOut" }}
      >
        <div className="flex flex-row flex-wrap relative justify-center items-center">
          <h1 className="font-bold p-2 sm:text-lg md:text-4xl lg:text-5xl xl:8xl">
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
          <h1 className="font-bold p-2 sm:text-lg md:text-4xl lg:text-5xl xl:8xl">
            Prof
          </h1>
        </div>
        <motion.p
          animate={{
            opacity: isHovered ? "100%" : "0%",
          }}
          className="text-center p-2 text-2xl font-medium"
        >
          Learn More!
        </motion.p>
      </motion.a>
    </>
  );
};

export default Title;
