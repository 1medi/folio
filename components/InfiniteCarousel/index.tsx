import { useMotionValue, animate, motion } from "framer-motion";
import Card from "../Card";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react"
import Link from "next/link";

export default function Carousel() {
  const images = [
    { src: "/carouselImages/qnc.png", title: "Quack n' Cluck", a:"/Projects/quack.pdf" },
    { src: "/carouselImages/ChuffCity.png",  title: "Chuff City V1", a:"/carouselImages/ChuffCity.png" },
    { src: "/carouselImages/ChuffCity2.png", title: "Chuff City V2", a:"/carouselImages/ChuffCity2.png" },
    { src: "/carouselImages/ChuffCity3.png", title: "Chuff City V3", a:"/carouselImages/ChuffCity3.png" },
    { src: "/carouselImages/DigitalMagazine.png", title: "Cycladic Blueprint (Digital)", a:"https://indd.adobe.com/view/d1ad75cd-d214-414b-9a49-784fc55dd04f" },
    { src: "/carouselImages/GradeyDick.png", title: "Gradey Dick Graphic", a:"/carouselImages/GradeyDick.png" },
    // { src: "/Pocket-Prof/ppquiz.png", title: "Pocket Prof Quiz" },
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
    <div className="overflow-x-hidden py-8 ">
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
            <Link
            target="_blank"
            key={idx}
            href={item.a}
            >
            <Card image={item.src} title={item.title} key={idx} />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
