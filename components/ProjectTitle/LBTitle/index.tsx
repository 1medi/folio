import React, { useState } from "react";
import First from "/public/lutong.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Title = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="title-container p-2 flex-wrap relative justify-center items-center flex flex-col  no-underline"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "#DD8143" : "",
        }}
        transition={{ ease: "backInOut" }}
      >
        <Link
          href="/ACG"
        >
          <div className="flex flex-row flex-wrap relative justify-center items-center">
            <h1 className="font-bold mt-2 pr-0.5 sm:text-lg sm:p-2 md:text-4xl lg:text-5xl xl:8xl">
              Lutong
            </h1>
            <motion.img
              src={First.src}
              height={128}
              width={512}
              animate={{
                width: isHovered ? "128px" : "0rem",
                height: isHovered ? "4rem" : "0rem",
                opacity: isHovered ? "100%" : "0%",
                padding: isHovered ? "0rem 0.75rem" : "",
              }}
              alt="aether"
            />
            <h1 className="font-bold mt-2 pl-0.5 sm:text-lg sm:p-2 md:text-4xl lg:text-5xl xl:8xl">  
              Bahay
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
        </Link>
      </motion.div>

    </>
  );
};

export default Title;
