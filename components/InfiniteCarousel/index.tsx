import { useMotionValue, animate, motion } from "framer-motion";
import Card from "../Card";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react"
import Link from "next/link";

export default function Carousel() {
  const images = [
    { 
      src: "/carouselImages/qnc.png", 
      title: "Quack n' Cluck", 
      a: "/Projects/quack.pdf",
      description: "A fun and engaging project featuring a quirky duck and chicken duo."
    },
    { 
      src: "/carouselImages/ChuffCity.png",  
      title: "Chuff City V1", 
      a: "/carouselImages/ChuffCity.png",
      description: "The first iteration of the Chuff City project, showcasing early design concepts."
    },
    { 
      src: "/carouselImages/ChuffCity2.png", 
      title: "Chuff City V2", 
      a: "/carouselImages/ChuffCity2.png",
      description: "An improved version of Chuff City with refined visuals and enhancements."
    },
    { 
      src: "/carouselImages/ChuffCity3.png", 
      title: "Chuff City V3", 
      a: "/carouselImages/ChuffCity3.png",
      description: "The final iteration of Chuff City, bringing a polished and cohesive design."
    },
    { 
      src: "/carouselImages/DigitalMagazine.png", 
      title: "Cycladic Blueprint (Digital)", 
      a: "https://indd.adobe.com/view/d1ad75cd-d214-414b-9a49-784fc55dd04f",
      description: "A digital magazine exploring the iconic architecture of the Cyclades."
    },
    { 
      src: "/carouselImages/GradeyDick.png", 
      title: "Gradey Dick Graphic", 
      a: "/carouselImages/GradeyDick.png",
      description: "A dynamic graphic representation of basketball player Gradey Dick."
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
    <div className="overflow-x-hidden ">
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
            <Card image={item.src} title={item.title} key={idx} description={item.description} />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
