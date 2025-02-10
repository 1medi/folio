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
      className="h-screen flex justify-center items-center relative snap-start"
      style={{ backgroundColor }}
    >
      <div
        ref={ref}
        className="w-72 max-h-[90vh] m-5 bg-none overflow-hidden snap-center flex justify-center items-center"
      >
        <Component />
      </div>
      <motion.h2
        className="absolute text-accent left-[calc(50%+130px)] text-[56px] font-bold tracking-[-3px] leading-[1.2]"
        style={{ y }}
      >
        {text}
      </motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

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
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-accent origin-left"
        style={{ scaleX }}
      />
    </>
  );
}
