import FadeIn from "@/app/utils/fadein";
import Image from "next/image";
import Journey from "/public/Aether/Workflow.png";
import PPPhone from "../../components/PhoneScreens/PPPhone";

const Workflow = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row m-4 xl:mx-8">
        <FadeIn className="user-workflow p-8 my-4  bg-[#a49e8e80] rounded-lg  w-full">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            User Workflow
          </h2>
          <div className="rounded-xl p-4 flex justify-center items-center">
            <iframe
              className="border border-solid border-gray-200 w-[350px] h-[450px] xl:w-[800px] xl:h-[450px] desktop:w-[1400px] desktop:h-[800px]"
              src="https://embed.figma.com/board/ajlRzKSjFxGePQWrx8X5aX/Customer-Journey?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Workflow;
