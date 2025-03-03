import FadeIn from "@/app/utils/fadein";
import HifiCarousel from "./HifiCarousel";
import LofiCarousel from "./LofiCarousel";
import PrototypeTable from "../PrototypeTable"
import { motion } from "framer-motion";
import { useState } from "react";

export default function Section7() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [linkText1, setLinkText1] = useState("Lo-Fi on Figma!");
  const [linkText2, setLinkText2] = useState("Hi-Fi on Figma!");
  return (
    <>
      <FadeIn className="marketing  h-full p-8 mx-4 mb-4 bg-[#a49e8e80] rounded-lg lg:mx-8 lg:mb-8 ">
        <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
          Design Progression
        </h2>
        <div className="inner flex flex-col xl:flex-row justify-center items-center p-4">
          <iframe
            className="border border-solid border-gray-200 w-[350px] h-[450px] xl:w-[800px] xl:h-[450px] desktop:w-[1400px] desktop:h-[800px]"
            src="https://embed.figma.com/design/eKUiV3gWInupozNnMRm1EY/Aether-Prototype?node-id=2750-6684&embed-host=share&hide-ui=1&footer=false"
            allowFullScreen
          ></iframe>
          <div className="flex justify-center items-center m-2 w-[350px] xl:w-[500px]">
          <PrototypeTable/>
          </div>

        </div>
      </FadeIn>
    </>
  );
}
