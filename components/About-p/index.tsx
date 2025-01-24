"use client";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Projects } from "@/app/utils/data";
import { useRef } from "react";
import Image from "next/image";

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

  return (
    <section
      ref={ref}
      className="min-h-lvh pt-[5lvh] pb-[5lvh] pr-[5lvw] pl-[5lvw] flex flex-col items-center gap-16"
      id="projects"
    >
      <h1 className="text-6xl font-bold mb-8 text-center">My Projects</h1>
      <article className="grow basis-40 flex flex-col gap-8">
        {/* <motion.p className="h3 uppercase" style={{ y: y1 }}>
          let me explain
        </motion.p> */}
        <motion.p className="text-3xl text-center" style={{ y: y2 }}>
          These projects were completed at the British Columbia Institute of
          Technology, within the Digital , Design and Development program.
        </motion.p>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Projects.map((data, i) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              style={{ backgroundColor: data.backgroundColor }}
              className="flex flex-col p-8 shadow-2xl gap-4 rounded"
            >
              <h1 className="text-5xl font-bold">{data.title}</h1>
              <div className="flex flex-row gap-4 justify-between items-center">
                <p>{data.description}</p>
                <Image
                  width={128}
                  height={128}
                  alt="Image Placeholder"
                  src={data.image}
                />
              </div>
              <div className="flex items-center justify-center">
                {/* <a href={data.pathName}> */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.75 }}
                    className="w-28 h-14 flex items-center justify-center bg-[#004f2d] rounded"
                  >
                    <p className="text-center text-white">More info coming soon!</p>
                  </motion.div>
                {/* </a> */}
              </div>
            </motion.div>
          );
        })}
      </article>
    </section>
  );
}
