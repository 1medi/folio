import React, { useState } from "react";
import AetherLogo from "../../../public/projectLogos/aetherLogo.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const AETitle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link href="/aether">
        <motion.div
          className="title-container p-2 flex-wrap relative justify-center items-center flex flex-col  no-underline"
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
            <motion.div
              animate={{
                width: isHovered ? "9rem" : "0rem",
                height: isHovered ? "32px" : "0rem",
                opacity: isHovered ? "100%" : "0%",
                padding: isHovered ? "0rem 0.75rem" : "0rem",
              }}
            >
              <Image src={AetherLogo} height={512} width={512} alt="aether" priority/>
            </motion.div>
          </div>

          <motion.p
            animate={{
              opacity: isHovered ? "100%" : "0%",
            }}
            className="text-center text-2xl font-medium"
          >
            Learn More!
          </motion.p>
        </motion.div>
      </Link>
    </>
  );
};

export default AETitle;

