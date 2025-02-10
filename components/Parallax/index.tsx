"use client";

import { useRef, useEffect } from "react";
import Lenis from "lenis";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import AePhone1 from "../PhoneScreens/AePhone1";
import AePhone2 from "../PhoneScreens/AePhone2";
import AePhone3 from "../PhoneScreens/AePhone3";

export default function Banners() {

  return (
    <>
      <div className="snap-y snap-mandatory">
        <div
          className="w-full flex snap-center snap-proximity justify-center flex-col md:flex-row items-center scroll-snap-align-start"
          style={{ backgroundColor: "#0B4F6F" }}
        >
          <div className="m-8">
            <AePhone1 />
          </div>
          <motion.h2 className="m-8 text-white text-[56px] lg:text-[108px] font-bold tracking-[-3px] leading-[1.2]">
            summarize.
          </motion.h2>
        </div>

        <div
          className="w-full flex justify-center snap-center snap-proximity flex-col md:flex-row items-center scroll-snap-align-start"
          style={{ backgroundColor: "#1E7FA5" }}
        >
          <div className="m-8">
            <AePhone2 />
          </div>
          <motion.h2 className="m-8 text-white text-[56px] lg:text-[108px] font-bold tracking-[-3px] leading-[1.2]">
            simplify.
          </motion.h2>
        </div>

        <div
          className="w-full flex justify-center items-center snap-proximity snap-center flex-col md:flex-row  scroll-snap-align-start"
          style={{ backgroundColor: "#9FC3E5" }}
        >
          <div className="m-8">
            <AePhone3 />
          </div>
          <motion.h2 className="m-8 text-white text-[56px] lg:text-[108px] font-bold tracking-[-3px] leading-[1.2]">
            streamline.
          </motion.h2>
        </div>
      </div>
    </>
  );
}
