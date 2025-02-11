"use client";

import { motion } from "framer-motion";
import AePhone1 from "../PhoneScreens/AePhone1";
import AePhone2 from "../PhoneScreens/AePhone2";
import AePhone3 from "../PhoneScreens/AePhone3";

export default function Banners() {
  const headingVariants = {
    initial: { y: 300, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -300, opacity: 0 },
  };

  return (
    <>
      <section
        className="w-full flex justify-center items-center snap-always snap-start flex-col md:flex-row "

        style={{ backgroundColor: "#0B4F6F" }}
      >
        <AePhone1 />
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="m-8">
          <motion.h2
            variants={headingVariants}
            className="m-4 text-white text-[56px] lg:text-[108px] xl:text-[208px] font-bold tracking-[-3px] leading-[1.2]"
          >
            summarize.<br />
            <motion.p className="text-center text-2xl tracking-[0.2px] font-normal">Get the gist in seconds—Aether condenses complex forms into clear takeaways.</motion.p>
          </motion.h2>

        </motion.div>

      </section>

      <section
        className="w-full flex justify-center items-center snap-always snap-start flex-col md:flex-row "
        style={{ backgroundColor: "#1E7FA5" }}
      >
        <AePhone2 />
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="m-8">
          <motion.h2
            variants={headingVariants}
            className="m-4 text-white text-[56px] lg:text-[108px] xl:text-[208px] font-bold tracking-[-3px] leading-[1.2]"
          >
            simplify.<br />
            <motion.p className="text-center text-2xl tracking-[0.2px] font-normal">Confusing paperwork? Aether rewrites it in plain, easy-to-understand language.</motion.p>
          </motion.h2>
        </motion.div>

      </section>

      <section
        id="section"
        className="w-full flex justify-center items-center snap-always snap-start flex-col md:flex-row "
        style={{ backgroundColor: "#9FC3E5" }}
      >
        <AePhone3 />
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="m-8">

          <motion.h2
            variants={headingVariants}
            className="m-4 text-white text-[56px] lg:text-[108px] xl:text-[208px] font-bold tracking-[-3px] leading-[1.2]"
          >
            streamline.<br />
            <motion.p className="text-center text-2xl tracking-[0.2px] font-normal">From photo to form in one tap—Aether makes document handling effortless.</motion.p>
          </motion.h2>
        </motion.div>

      </section>
    </>

  );
}
