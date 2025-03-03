import FadeIn from "@/app/utils/fadein";
import Image from "next/image";
import Journey from "/public/Aether/Workflow.png";
import PPPhone from "../../components/PhoneScreens/PPPhone";

const Workflow = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row m-4">
        <FadeIn className="user-workflow p-8 my-4 xl:ml-4 lg:mr-4 bg-[#a49e8e80] rounded-lg lg:w-3/5 ">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            User Workflow
          </h2>
          <div className="rounded-xl p-4">
            <Image src={Journey} alt="sitemap" />
          </div>
        </FadeIn>
        <FadeIn className="user-workflow p-8 my-4 xl:mx-4 bg-[#a49e8e80] rounded-lg lg:w-2/5 ">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            App Mockup
          </h2>
          <div className="flex justify-center h-full items-center m-auto">
            <PPPhone />
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Workflow;
