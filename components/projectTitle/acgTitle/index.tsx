import React, { useState } from "react";
import ACGLogo from "../../../public/projectLogos/acgLogo.webp"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ACGTitle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link href="/acg">
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
            <h1 className="font-bold pr-0.5 sm:text-lg sm:p-2 md:text-4xl lg:text-5xl xl:8xl">
              Awesome Card
            </h1>
            <motion.div
              animate={{
                width: isHovered ? "128px" : "0rem",
                height: isHovered ? "56px" : "0rem",
                opacity: isHovered ? "100%" : "0%",
                padding: isHovered ? "0rem 0.75rem" : "0rem",
              }}
            >
              <Image src={ACGLogo} height={128} width={128} alt="acg" priority />
            </motion.div>

            <h1 className="font-bold pl-0.5 sm:text-lg sm:p-2 md:text-4xl lg:text-5xl xl:8xl">
              Game (ACG)
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

export default ACGTitle;

