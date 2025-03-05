"use client";

import { motion } from "framer-motion";
import AePhone1 from "../phoneScreens/aePhone1";
import AePhone2 from "../phoneScreens/aePhone2";
import AePhone3 from "../phoneScreens/aePhone3";
import AEBanner from "../pageBanners/aeBanner";

export default function AeScroll() {
  const headingVariants = {
    initial: { y: 300, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 900, opacity: 0 },
  };

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hidden">
      <section
        className="snap-start w-full h-screen flex justify-center items-center flex-col"
        style={{ backgroundColor: "#0B4F6F" }}
      >
        <div className="xl:m-auto mt-20 flex justify-center items-center flex-col md:flex-row">
          <AePhone1 />
          <motion.div
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-8"
          >
            <motion.h2
              variants={headingVariants}
              className="m-2 text-white text-center text-[36px] md:text-[128px] 2xl:text-[208px] font-bold tracking-[-3px] leading-[1.2]"
            >
              summarize.
              <br />
              <motion.p className="text-center text-lg md:text-xl 2xl:text-2xl tracking-[0.2px] font-normal">
                Get the gist in seconds—Aether condenses complex forms into
                clear takeaways.
              </motion.p>
            </motion.h2>
          </motion.div>
        </div>
      </section>

      <section
        className="snap-start w-full h-screen flex justify-center items-center flex-col"
        style={{ backgroundColor: "#1E7FA5" }}
      >
        <div className="xl:m-auto mt-24 flex justify-center items-center flex-col md:flex-row">
          <AePhone2 />
          <motion.div
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-8"
          >
            <motion.h2
              variants={headingVariants}
              className="m-2 text-white text-center text-[36px] md:text-[128px] 2xl:text-[208px] font-bold tracking-[-3px] leading-[1.2]"
            >
              simplify.
              <br />
              <motion.p className="text-center text-lg md:text-xl 2xl:text-2xl tracking-[0.2px] font-normal">
                Confusing paperwork? Aether rewrites it in plain,
                easy-to-understand language.
              </motion.p>
            </motion.h2>
          </motion.div>
        </div>
      </section>

      <section
        id="section"
        className="snap-start w-full h-screen flex justify-center items-center flex-col md:flex-row"
        style={{ backgroundColor: "#9FC3E5" }}
      >
        <div className="xl:m-auto mt-24 flex justify-center items-center flex-col xl:flex-row">
          <AePhone3 />
          <motion.div
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-8"
          >
            <motion.h2
              variants={headingVariants}
              className="m-2 text-white text-center text-[36px] md:text-[128px] 2xl:text-[208px] font-bold tracking-[-3px] leading-[1.2]"
            >
              streamline.
              <br />
              <motion.p className="text-center text-lg md:text-xl 2xl:text-2xl tracking-[0.2px] font-normal">
                From photo to form in one tap—Aether makes document handling
                effortless.
              </motion.p>
            </motion.h2>
          </motion.div>
        </div>
      </section>

      <div className="snap-start w-full h-screen">
        <AEBanner />
      </div>
    </div>
  );
};
