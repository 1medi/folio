import React, { useState } from "react";
import First from "/public/aetherLogo.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Title = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.a
        className="title-container p-2 flex-wrap relative justify-center items-center flex flex-col  no-underline"
        href="/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "#0abaef" : "",
        }}
        transition={{ ease: "backInOut" }}
      >
        <div className="flex flex-row p-2 flex-wrap relative justify-center items-center">
          <h1 className="font-bold p-2 sm:text-lg md:text-4xl lg:text-5xl xl:8xl">
            Aether
          </h1>
          <motion.img
            src={First.src}
            height={512}
            width={512}
            style={{objectFit:"contain"}}
            animate={{
              width: isHovered ? "6rem" : "0rem",
              height: isHovered ? "4rem" : "0rem",
              opacity: isHovered ? "100%" : "0%",
              padding: isHovered ? "0rem 0.5rem" : "0rem",
            }}
            alt="aether"
          />
        </div>
        <motion.p
          animate={{
            opacity: isHovered ? "100%" : "0%",
          }}
          className="text-center text-2xl font-medium"
        >
          Learn More!
        </motion.p>
      </motion.a>
    </>
  );
};

export default Title;
