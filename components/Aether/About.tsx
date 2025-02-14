import {
  SiGooglecloud,
  SiFigma,
  SiExpo,
  SiReact,
  SiOpenai,
  SiMongodb,
} from "react-icons/si";

export default function Section1() {
  return (
    <>
      <div className="m-4 mt-20 xl:mt-4 h-screen xl:h-auto justify-center  bg-[#a49e8e80] rounded-lg items-center p-4 flex flex-col">
        <div className=" xl:m-0">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-2 m-4">
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
      </div>

      <div className="snap-center h-full xl:snap-none flex flex-col ">
        <div className="about p-8 bg-[#a49e8e80] rounded-lg m-4 lg:p-4 xl:p-12 lg:m-none desktop:p-24">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            What is Aether?
          </h2>
          <p className="p-4 lg:text-lg text-center">
            Aether’s unique approach allows our audience to scan paper forms and
            upload documents to their mobile devices, convert them into editable
            digital versions, and simplify complicated terminology with a click
            of a buttton. Additionally, by addressing the administrative burden
            many Canadians face—especially the millions supporting elderly
            family members
          </p>
        </div>

        <div className="proj-ideation p-8 bg-[#a49e8e80] rounded-lg m-4 lg:p-4 lg:m-none xl:p-12 desktop:p-24">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            Identifying The Issue
          </h2>
          <p className="p-4 lg:text-lg">
            <span className="font-bold text-xl">Did you know? </span>
            Caregivers spend up to an average of 10-15 hours per week managing
            forms and paperwork! Through the team's research and surveying, it
            was found that caregivers felt:
          </p>
          <ul className=" text-center underline lg:text-lg xl:text-xl  ">
            <li>Repetitive paperwork is tiring understanding </li>
            <li>Learning legal terms is stressful</li>
            <li>Time spent on forms, meant time lost with loved ones</li>
          </ul>
        </div>
      </div>
    </>
  );
}
