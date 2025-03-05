import React, { useState } from "react";
import Lutong from "../../../public/projectLogos/lutongBahayLogo.png";
import { motion } from "framer-motion";
import Link from "next/link";

const LBTitle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link href="/lutongBahay">
        <motion.div
          className="title-container p-2 flex-wrap relative justify-center items-center flex flex-col  no-underline"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            backgroundColor: isHovered ? "#DD8143" : "",
          }}
          transition={{ ease: "backInOut" }}
        >
          <div className="flex flex-row flex-wrap relative justify-center items-center">
            <h1 className="font-bold mt-2 pr-0.5 sm:text-lg sm:p-2 md:text-4xl lg:text-5xl xl:8xl">
              Lutong
            </h1>
            <motion.img
              src={Lutong.src}
              height={96}
              width={64}
              animate={{
                width: isHovered ? "96px" : "0rem",
                height: isHovered ? "64px" : "0rem",
                opacity: isHovered ? "100%" : "0%",
                padding: isHovered ? "0rem 0.75rem" : "0rem",
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
        </motion.div>
      </Link>
    </>
  );
};

export default LBTitle;

