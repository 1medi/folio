import React, { useState } from "react";
import PPOscar from "../../../public/projectLogos/pocketProfLogo.png";
import { motion } from "framer-motion";
import Link from "next/link";

const PPTitle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link href="/Pocket-Prof">
        <motion.div
          className="title-container p-2 flex-wrap relative justify-center items-center flex flex-col  no-underline"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            backgroundColor: isHovered ? "#656384" : "",
          }}
          transition={{ ease: "backInOut" }}
        >
          <div className="flex flex-row flex-wrap relative justify-center items-center">
            <h1 className="font-bold pr-0.5 sm:text-lg sm:p-2 md:text-4xl lg:text-5xl xl:8xl">
              Pocket
            </h1>
            <motion.img
              src={PPOscar.src}
              height={512}
              width={512}
              animate={{
                width: isHovered ? "12rem" : "0rem",
                opacity: isHovered ? "100%" : "0%",
                padding: isHovered ? "0rem 0.75rem" : "0rem",
              }}
              alt="aether"
            />
            <h1 className="font-bold pl-0.5 sm:text-lg sm:p-2 md:text-4xl lg:text-5xl xl:8xl">
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
        </motion.div>
      </Link>
    </>
  );
};

export default PPTitle;
