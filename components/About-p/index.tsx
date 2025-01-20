"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { Projects } from "@/app/utils/data";
import { useRef } from "react";
import Image from "next/image";
import Arrow from "/public/arrow.svg"

export default function AboutP() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.floor(Math.random() * -100) - 25]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.floor(Math.random() * -50) - 25]
  );
  const width = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="min-h-lvh pt-[5lvh] pb-[5lvh] pr-[5lvw] pl-[5lvw] flex flex-wrap-reverse items-center gap-16"
      id="projects"
    >
      <h1 className="text-6xl font-bold mb-8 text-center">My Projects</h1>
      <article className="grow basis-40 flex flex-col gap-8">
        <motion.p className="h3 uppercase" style={{ y: y1 }}>
          let me explain
        </motion.p>
        <motion.p style={{ y: y2 }}>
These projects were completed at the British Columbia Institute of Techonology, within the Digital , Design and Development program
        </motion.p>
      </article>
      <article className="grow basis-96 overflow-hidden flex flex-col gap-4">
        {Projects.map((data, i) => {
          const x = useTransform(
            scrollYProgress,
            [0, 0.5],
            [(i + 1) * 50 + 25, 0]
          );
          const spring = useSpring(x, { stiffness: 1000, damping: 200 });
          return (
            <motion.div
              key={i}
              style={{ x: spring }}
              className="flex flex-col gap-4"
            >
              <div className="flex gap-4 justify-between items-center">
                <p className="h3 uppercase">
                  0{i + 1}. {data.title}
                </p>
                <a href={data.pathName}>
                  <Image
                    alt="arrow"
                    src={Arrow}
                    height={15}
                    width={15}
                    loading="lazy"
                  />
                </a>
              </div>
              <motion.div
                style={{ width }}
                className="border-t border-current"
              />
            </motion.div>
          );
        })}
      </article>
    </section>
  );
}
