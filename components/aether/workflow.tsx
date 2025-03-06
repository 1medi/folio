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
            className="border border-solid border-gray-200 w-[350px] h-[450px] xl:w-[800px] xl:h-[450px] desktop:w-[800px] desktop:h-[800px]"
            src="https://embed.figma.com/board/ajlRzKSjFxGePQWrx8X5aX/Customer-Journey?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
          <div className="p-4 m-auto">
            <h1 className="text-center xl:text-4xl font-medium">Key Flows</h1>
            <ul className="text-left text-xl p-2">
              <li>Upload and scanning documents</li>
              <li>Viewing and editing </li>
              <li>Creating profiles for elderly</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Workflow;
