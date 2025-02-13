import Image from "next/image";
import Openai from "../../public/Logos/openai.png";
import Quillbot from "../../public/Logos/quillbot.png";
import PDFai from "../../public/Logos/pdfai.jpg";

export default function Section2() {
  return (
    <>
      <div className="proj-ideation p-4  xl:p-10 bg-[#a49e8e80]  rounded-lg w-full h-full xl:h-[800px] ">
        <h2 className="text-2xl text-center  xl:text-3xl  bg-[#3A3F2D] rounded-lg m-4 p-4">
          Competitive Analysis
        </h2>
        <div className="flex flex-col xl:items-center p-4 xl:justify-around xl:items-around xl:h-[600px] xl:p-8 xl:pb-8">
          <div className="m-4 md:m-2 flex flex-col md:w-1/3 xl:w-auto xl:m-4">
            <div className="header flex flex-row items-center">
              <Image
                className="rounded-full m-4"
                src={Openai}
                alt="action"
                width={64}
              />
              <h1 className="text-xl lg:text-3xl font-semibold">ChatGPT</h1>
            </div>
            <p className="">
              A large language model that can be used to help answer questions
              as well as clarifying text that may need alternate way of
              explaining. This technology can scan Images, simplify paragraphs
              and provide alternative detailed answers.
            </p>
          </div>

          <div className="m-4 md:m-2 flex flex-col md:w-1/3 xl:w-auto xl:m-4">
            <div className="header flex flex-row items-center">
              <Image
                className="rounded-full m-4"
                src={PDFai}
                alt="action"
                width={64}
              />
              <h1 className="text-xl lg:text-3xl font-semibold">PDF.ai</h1>
            </div>
            <p className="">
              PDF.ai is an AI-powered tool designed to interact with and analyze
              PDF documents, allowing users to ask questions, extract data, and
              generate summaries, making document comprehension and research
              more efficient. It is especially useful in professional settings
              for automating data extraction and gaining insights from complex
              texts.
            </p>
          </div>
          <div className="m-4 md:m-2 flex flex-col md:w-1/3 xl:w-auto xl:m-4">
            <div className="header flex flex-row items-center">
              <Image
                className="rounded-full m-4"
                src={Quillbot}
                alt="action"
                width={64}
              />
              <h1 className="text-xl lg:text-3xl font-semibold">Quillbot</h1>
            </div>
            <p className="">
              Started in 2017 as an app to help students improve their english
              when writing. Since then, it has evolved into a AI-powered writing
              platform. They are also partnered with 150 universities. They have
              started expanding the use of AI in their website and app and
              adding new features to it such as citation, grammar check,
              summarizer, plagarism check, and more
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
