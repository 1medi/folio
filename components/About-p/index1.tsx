"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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
        <motion.p className="text-3xl text-center" >
          These projects were completed at the British Columbia Institute of
          Technology, within the Digital , Design and Development program.
        </motion.p>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Projects.map((data, i) => {
          return (
            <a href={data.pathName} key={data.id}>
              <motion.div
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                style={{ backgroundColor: data.backgroundColor }}
                className="aspect-square flex flex-col justify-center items-center shadow-2xl rounded-lg p-12"
              >
                {/* <h1 className="text-2xl font-bold text-center">{data.title}</h1> */}
                <Image
                  width={128}
                  height={128}
                  alt="Project logo"
                  src={data.image}
                  className="mt-4"
                />
              </motion.div>
            </a>
          );
        })}
      </article>
    </section>
  );
}
