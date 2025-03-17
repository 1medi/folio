import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { motion } from "framer-motion";

export default function LogoComparison2() {
  function HeaderBar() {
    return (
      <>
        <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
        <div className="absolute right-3 top-2 z-10 flex gap-2">
          <FiWifi className="text-neutral-600" />
          <FiBatteryCharging className="text-neutral-600" />
        </div>
      </>
    );
  }
  return (
    <motion.div
      initial={{
        transform: "translateZ(8px) translateY(-2px)",
      }}
      animate={{
        transform: "translateZ(32px) translateY(-8px)",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      }}
      className="m-4 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
    >
      <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
        <HeaderBar />
        <ImgComparisonSlider>
          <figure slot="first" className="relative m-0">
            <img
              className="bg-slate-500 block w-full lg:h-[550px]"
              src="/aether/appOld2.webp"
            />
            <figcaption className="absolute top-[90%] left-3 -translate-y-1/2 bg-white border border-gray-400 rounded-xl text-[#2e3452] opacity-80 p-3 leading-none">
              Before
            </figcaption>
          </figure>
          <figure slot="second" className="relative m-0">
            <img
              className=" block w-full lg:h-[550px]"
              src="/aether/appNew2.webp"
            />
            <figcaption className="absolute top-[10%] right-3 -translate-y-1/2 bg-white border border-gray-400 rounded-xl text-[#2e3452] opacity-80 p-3 leading-none">
              After
            </figcaption>
          </figure>
        </ImgComparisonSlider>
      </div>
    </motion.div>
  );
}
