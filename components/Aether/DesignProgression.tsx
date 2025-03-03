import FadeIn from "@/app/utils/fadein";
import HifiCarousel from "./HifiCarousel";
import LofiCarousel from "./LofiCarousel";
import { motion } from "framer-motion";
import { useState } from "react";


export default function Section7() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [linkText1, setLinkText1] = useState("Lo-Fi on Figma!");
  const [linkText2, setLinkText2] = useState("Hi-Fi on Figma!");
  return (
    <>
      <FadeIn className="marketing  h-full p-8 mx-4 mb-4 bg-[#a49e8e80] rounded-lg lg:mx-8 lg:mb-8 ">
        <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
          Design Progression
        </h2>
        <div className="inner flex flex-col xl:flex-row justify-center items-center">
          <div className="lofi p-4 m-4">
            <motion.div
              onMouseEnter={() => {
                setIsHovered1(true);
                setLinkText1("Designed for iPhone 14 Pro Max!");
              }}
              onMouseLeave={() => {
                setIsHovered1(false);
                setLinkText1("Hi-Fi on Figma!");
              }}
              animate={{
                backgroundColor: isHovered1 ? "#0b243f" : "",
                scale: isHovered1 ? 1.1 : 1,
              }}
              transition={{ ease: "backInOut" }}
              className="bg-[#012d5e]  p-2 rounded-2xl m-4 "
            >
              <a
                href="https://www.figma.com/proto/eKUiV3gWInupozNnMRm1EY/Aether-Prototype?node-id=353-1171&t=IKSzd7laDgOyphHu-1&scaling=scale-down&content-scaling=fixed&page-id=49%3A10&starting-point-node-id=136%3A79"
                target="_blank"
              >
                <motion.p
                  animate={isHovered1 ? "visible" : ""}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, fontSize: "32px" },
                  }}
                  className="text-4xl text-center"
                >
                  {linkText1}
                </motion.p>
              </a>
            </motion.div>
            <LofiCarousel />
          </div>
          <div className="hifi p-4 m-4">
            <motion.div
              onMouseEnter={() => {
                setIsHovered2(true);
                setLinkText2("Designed for iPhone 14 Pro Max!");
              }}
              onMouseLeave={() => {
                setIsHovered2(false);
                setLinkText2("Hi-Fi on Figma!");
              }}
              animate={{
                backgroundColor: isHovered2 ? "#0b243f" : "",
                scale: isHovered2 ? 1.1 : 1,
              }}
              transition={{ ease: "backInOut" }}
              className="bg-[#012d5e] p-2 rounded-2xl m-4"
            >
              <a
                href="https://www.figma.com/proto/eKUiV3gWInupozNnMRm1EY/Aether-Prototype?node-id=2750-7065&t=12JHeR3FjieN3Dpj-1&scaling=scale-down&content-scaling=responsive&page-id=2750%3A6683&starting-point-node-id=2750%3A7345&show-proto-sidebar=1"
                target="_blank"
              >
                <motion.p
                  animate={isHovered2 ? "visible" : ""}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, fontSize: "32px" },
                  }}
                  className="text-xl xl:text-4xl text-center"
                >
                  {linkText2}
                </motion.p>
              </a>
            </motion.div>
            <HifiCarousel />
          </div>
        </div>
      </FadeIn>
    </>
  );
}
