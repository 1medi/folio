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

const components = [AePhone1, AePhone2, AePhone3];
const texts = ["summarize.", "simplify.", "streamline."];
const backgroundColors = ["#0B4F6F", "#1E7FA5", "#9FC3E5"];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ComponentWrapper({
  component: Component,
  text,
  backgroundColor,
}: {
  component: React.FC;
  text: string;
  backgroundColor: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      className="y-snap h-full flex justify-center items-center relative snap-start overflow-y-scroll"
      style={{ backgroundColor }}
    >
      <div
        ref={ref}
        className="w-full lg:w-full max-h-[90vh] m-8 bg-none overflow-hidden flex justify-center items-center"
      >
        <Component />
      </div>
      <motion.h2
        className="absolute top-10 md:top-auto snap-center snap-proximity text-accent text-white md:left-[calc(50%+150px)] text-[56px] lg:text-[108px] font-bold tracking-[-3px] leading-[1.2]"
      >
        {text}
      </motion.h2>
    </section>
  );
}

export default function App() {
  return (
    <>
      {components.map((Component, index) => (
        <ComponentWrapper
          key={index}
          component={Component}
          text={texts[index]}
          backgroundColor={backgroundColors[index]}
        />
      ))}
    </>
  );
}
