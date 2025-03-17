import React, { useState } from "react";
import PPOscar from "../../../public/projectLogos/pocketProfLogo.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PPTitle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link href="/pocketProf">
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
            <h1 className="font-bold pr-0.5 sm:text-lg sm:p-2 md:text-4xl desktop:text-7xl">
              Pocket
            </h1>
            <motion.div
              animate={{
                width: isHovered ? "12rem" : "0rem",
                opacity: isHovered ? "100%" : "0%",
                padding: isHovered ? "0rem 0.75rem" : "0rem",
              }}
            >
              <Image
                src={PPOscar.src}
                height={512}
                width={512}
                alt="Pocket Prof"
                priority
              />
            </motion.div>
            <h1 className="font-bold pl-0.5 sm:text-lg sm:p-2 md:text-4xl desktop:text-7xl">
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
