import Image from "next/image";
import Persona1 from "../../public/persona/persona1.webp";
import SharedTable from "../personaTable";
import FadeIn from "@/app/utils/fadein";

export default function Section3() {
  return (
    <>
      <FadeIn className="userPersona about p-4 bg-[#a49e8e80] rounded-lg m-4 xl:mb-8">
        <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4 xl:m-4">
          User Personas
        </h2>
        <div className="flex p-4 flex-col md:flex-row">
          <div className="persona1 flex m-auto flex-col ">
            <div className="flex flex-col xl:flex-row justify-center items-center ">
              <h3 className="text-2xl lg:text-5xl xl:text-center font-bold m-2 l:m-4">
                Sarah James
              </h3>
              <Image
                className="w-[200px] h-[200px] m-2 lg:m-4 rounded-lg"
                src={Persona1}
                alt="Sarah James"
              />
            </div>
            <div className="m-4 text-center">
              <h4 className="text-xl lg:text-3xl font-semibold">
                Personal Details
              </h4>
              <ul className=" m-2">
                <li className="text-2xl">
                  <span className="font-bold">Age: </span> 57
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Gender: </span>Female
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Occupation:</span> Senior Home
                  Caregiver
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Income: </span>$70,000
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Location:</span> Coquitlam, BC
                </li>
                <li className="text-2xl">
                  <span className="font-bold">Ethnicity:</span> Caucasian
                </li>
              </ul>
            </div>
          </div>
          <div className="flex m-auto">
            <SharedTable />
          </div>
        </div>
      </FadeIn>
    </>
  );
};

