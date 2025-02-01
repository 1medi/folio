import { useMotionValue, animate, motion } from "framer-motion";
import Card from "../Card";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    { src: "/ACG/colors.png", title: "Colors" },
    { src: "/ACG/imagery.png", title: "Imagery" },
    { src: "/ACG/measurements.png", title: "Measurements" },
    { src: "/ACG/typography.png", title: "Typography" },
    { src: "/Pocket-Prof/pplanding.png", title: "Pocket Prof Landing" },
    { src: "/Pocket-Prof/ppquestion.png", title: "Pocket Prof Question" },
    { src: "/Pocket-Prof/ppquiz.png", title: "Pocket Prof Quiz" },
  ];

  const links = ["/"];

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -width * 24 - 8;
    let controls;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 500,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls?.stop;
  }, [xTranslation, width]);

  return (
    <div className="overflow-x-hidden py-8 mb-48">
      <h1 className="text-7xl text-center p-4 font-bold">Other Works</h1>
      <div className="w-screen overflow-x-hidden">
        <motion.div
          className="flex gap-4"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
          ].map((item, idx) => (
            <Card image={item.src} title={item.title} key={idx} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
