import {
  SiGooglecloud,
  SiFigma,
  SiExpo,
  SiReact,
  SiOpenai,
  SiMongodb,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Section1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Detects when it's in viewport
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isInView) {
      setIsVisible(false); // Triggers exit animation when out of view
    } else {
      setIsVisible(true);
    }
  }, [isInView]);
  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "exit"}
        transition={{ duration: 0.3 , }}
        variants={{
          visible: { opacity: 1, scale: 1,   },
          hidden: { opacity: 0, scale: 0 },
          exit: { opacity: 0, scale: 0.8 }, // Custom exit animation
        }}
        className="mx-4 xl:mt-4 xl:h-full xl:h-auto justify-center  bg-[#a49e8e80] rounded-lg items-center xl:m-8 p-4 flex flex-col"
      >
        <div className=" xl:m-0">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-2 m-4">
            Tools Used
          </h2>
          <ul className="p-6 xl:p-2 text-center lg:grid lg:grid-cols-2 xl:w-auto">
            <li className="text-2xl lg:text-xl p-2">
              <SiGooglecloud className="inline-block mr-2" />
              Google Cloud Vision
            </li>
            <li className="text-2xl lg:text-xl p-2">
              <SiFigma className="inline-block mr-2" />
              Figma
            </li>
            <li className="text-2xl lg:text-xl p-2">
              <SiExpo className="inline-block mr-2" />
              Expo
            </li>
            <li className="text-2xl lg:text-xl p-2">
              <SiReact className="inline-block mr-2" />
              React Native
            </li>
            <li className="text-2xl lg:text-xl p-2">
              <SiOpenai className="inline-block mr-2" />
              OpenAI
            </li>
            <li className="text-2xl lg:text-xl p-2">
              <SiMongodb className="inline-block mr-2" />
              Mongo DB
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 xl:m-0 xl:w-auto">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4 m-4">
            Key Features
          </h2>
          <ul className="p-3 lg:text-xl text-center">
            <li className="text-2xl p-3">Camera Paraphrasing</li>
            <li className="text-2xl p-3">PDF Library</li>
            <li className="text-2xl p-3">Autofill PDF Information</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
