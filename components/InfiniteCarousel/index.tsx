import { useMotionValue, animate, motion } from "framer-motion";
import Card from "../Card";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    "/ACG/colors.png",
    "/ACG/imagery.png",
    "/ACG/measurements.png",
    "/ACG/typography.png",
    "/Pocket-Prof/pplanding.png",
    "/Pocket-Prof/ppquestion.png",
    "/Pocket-Prof/ppquiz.png",
  ];

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -width * 5 -8;
    let controls;

      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: 135,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      })

    return controls?.stop;
  }, [xTranslation, width,]);

  return (
<div className="overflow-x-hidden py-8 mb-48">
  <h1 className="text-7xl text-center p-4 font-bold">Other Works</h1>
  <div className="w-screen overflow-x-hidden">
    <motion.div
      className="flex gap-4"
      ref={ref}
      style={{ x: xTranslation }}
    >
      {[...images, ...images, ...images, ...images,...images,...images].map((item, idx) => (
        <Card image={item} key={idx} />
      ))}
    </motion.div>
  </div>
</div>
  );
}
