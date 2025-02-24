import {
  SiGooglecloud,
  SiFigma,
  SiExpo,
  SiReact,
  SiOpenai,
  SiMongodb,
} from "react-icons/si";
import FadeIn from "@/app/utils/fadein";

export default function Section1() {
  return (
    <FadeIn className="Tools-nd-Stuff justify-center w-full bg-[#a49e8e80] rounded-lg items-center m-4 mb-0 lg:m-auto lg:ml-4 p-4 flex flex-col">
      <div className="">
        <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-2 m-4 desktop:p-4">
          Tools Used
        </h2>
        <ul className="p-6 xl:p-2 text-center lg:grid lg:grid-cols-2 xl:w-auto">
          <li className="text-2xl lg:text-xl p-2">
            <SiGooglecloud className="inline-block mr-2" />
            Google Cloud Vision
          </li>
          <li className="text-2xl lg:text-xl p-2">
            <SiFigma className="inline-block mr-2" />
            Figma
          </li>
          <li className="text-2xl lg:text-xl p-2">
            <SiExpo className="inline-block mr-2" />
            Expo
          </li>
          <li className="text-2xl lg:text-xl p-2">
            <SiReact className="inline-block mr-2" />
            React Native
          </li>
          <li className="text-2xl lg:text-xl p-2">
            <SiOpenai className="inline-block mr-2" />
            OpenAI
          </li>
          <li className="text-2xl lg:text-xl p-2">
            <SiMongodb className="inline-block mr-2" />
            Mongo DB
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 xl:m-0 xl:w-auto">
        <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4 m-4">
          Key Features
        </h2>
        <ul className="p-3 lg:text-xl text-center">
          <li className="text-2xl p-3">Camera Paraphrasing</li>
          <li className="text-2xl p-3">PDF Library</li>
          <li className="text-2xl p-3">Autofill PDF Information</li>
        </ul>
      </div>
    </FadeIn>
  );
}
