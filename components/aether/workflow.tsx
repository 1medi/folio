import FadeIn from "@/app/utils/fadein";

const Workflow = () => {
  return (
    <>
      <FadeIn className="user-workflow p-8 my-8 bg-[#a49e8e80] rounded-lg  m-4 xl:mx-8 ">
        <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
          User Workflow
        </h2>
        <div className="rounded-xl p-4 flex justify-center items-center flex-col xl:flex-row">
          <iframe
            className="border border-solid border-gray-200 w-[350px] h-[450px] xl:w-[800px] xl:h-[450px] desktop:w-[1200px] desktop:h-[800px]"
            src="https://embed.figma.com/board/ajlRzKSjFxGePQWrx8X5aX/Customer-Journey?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
          <div className="p-4 m-auto">
            <h1 className="text-center xl:text-4xl font-medium">Key Flows</h1>
            <ul className="text-left p-2 desktop:text-2xl">
              <li className=" xl:p-2 text-xl xl:text-2xl  desktop:p-4">Login & Profile Creation</li>
              <p className="xl:text-md">
                Purpose: Allows users to log in and create a profile for elderly
                individuals.
              </p>
              <li className="xl:p-2 text-xl xl:text-2xl  desktop:p-4 desktop:text-2xl">
                Managing Elderly Profiles
              </li>
              <p>Purpose: Users can add, view, and edit elderly profiles.</p>
              <li className=" xl:p-2 desktop:p-4 text-xl xl:text-2xl ">
                Document Upload & Scanning{" "}
              </li>
              <p>
                Purpose: Upload or scan documents for review and processing.
              </p>
              <li className=" xl:p-2 desktop:p-4 text-xl xl:text-2xl ">
                Document Editing & AI Assistance
              </li>
              <p>
                Purpose: Users refine extracted text, resolve confusion, and
                paraphrase content.
              </p>
            </ul>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Workflow;
