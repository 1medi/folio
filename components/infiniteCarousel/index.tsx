import { useMotionValue, animate, motion } from "framer-motion";
import Card from "../card";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomeCarousel() {
  const images = [
    {
      src: "/carouselImages/qnc.png",
      title: "Quack n' Cluck",
      a: "/Projects/Quack",
      description:
        "A fun and engaging project featuring a quirky duck and chicken duo.",
    },
    {
      src: "/carouselImages/ChuffCity2.png",
      title: "Chuff City Posters",
      a: "/Projects/ChuffCity",
      description:
        "The iterations of the Chuff City project, showcasing all design concepts.",
    },
    {
      src: "/carouselImages/DigitalMagazine.png",
      title: "Cycladic Blueprint (Digital)",
      a: "https://indd.adobe.com/view/d1ad75cd-d214-414b-9a49-784fc55dd04f",
      description:
        "A digital magazine exploring the iconic architecture of the Cyclades.",
    },
    {
      src: "/carouselImages/GradeyDick.png",
      title: "Gradey Dick Graphic",
      a: "/Projects/GradeyDick",
      description:
        "A dynamic graphic representation of basketball player Gradey Dick.",
    },
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
    <div id="other-works" className="overflow-x-hidden ">
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
            <Link key={idx} href={item.a}>
              <Card
                image={item.src}
                title={item.title}
                key={idx}
                description={item.description}
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

