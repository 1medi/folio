"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import AEBanner from "../../../components/PageBanners/AeBanner";
import Image from "next/image";
import PPSitemap from "../../../public/Pocket-Prof/PPSitemap.png";
import PPPhone from "../../../components/PPPhone";
import Openai from "../../../public/Logos/openai.png";
import Quillbot from "../../../public/Logos/quillbot.png";
import PDFai from "../../../public/Logos/pdfai.jpg";

const Aether = () => {
  return (
    <>
      <Header />
      <AEBanner />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 m-auto">
        <motion.section className="w-full">
          <div className=" m-8 justify-center bg-[#a49e8e80] rounded-lg items-center p-4 flex flex-col lg:flex-row">
            <div className=" md:w-1/2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                Tools Used
              </h2>
              <ul className="p-6 text-center lg:grid lg:grid-cols-2 ">
                <li className="text-2xl p-2">Google Cloud Vision</li>
                <li className="text-2xl p-2 ">Figma</li>
                <li className="text-2xl p-2">Expo</li>
                <li className="text-2xl p-2">React Native</li>
                <li className="text-2xl p-2">OpenAI</li>
                <li className="text-2xl p-2">Mongo DB</li>
              </ul>
            </div>
            <div className="p-4 md:w-1/2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                Key Features
              </h2>
              <ul className="p-3 text-center">
                <li className="text-2xl p-3">Camera Paraphrasing</li>
                <li className="text-2xl p-3">PDF Library</li>
                <li className="text-2xl p-3">Autofill PDF Information</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row m-4">
            <div className="about p-8 bg-[#a49e8e80] rounded-lg m-4 lg:w-1/2 lg:ml-4 lg:mr-4 lg:m-2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                What is Aether?
              </h2>
              <p className="p-4 text-center">
                Aether’s unique approach allows our audience to scan paper forms
                and upload documents to their mobile devices, convert them into
                editable digital versions, and simplify complicated terminology
                with a click of a buttton. Additionally, by addressing the
                administrative burden many Canadians face—especially the
                millions supporting elderly family members
              </p>
            </div>

            <div className="proj-ideation p-8 bg-[#a49e8e80] rounded-lg lg:w-1/2  m-4 lg:mr-4 lg:ml-4 lg:m-2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                Identifying The Issue
              </h2>
              <p className="text-center p-4">
                There was a gap found in the ability of finding new skills due
                to the overwhelming surplus of resources available of the
                internet. Through the app ideation proccess, we determined with
                the help of AI, we can collect all the available resources and
                make it available into 1 congestable application: Pocket Prof!
              </p>
            </div>
          </div>

          <div className="proj-ideation p-8  bg-[#a49e8e80] rounded-lg m-8">
            <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
              Competitive Analysis
            </h2>

            <div className="flex flex-col md:flex-row p-4 justify-around">
              <div className="m-4 md:m-2 flex flex-col md:w-1/3">
                <div className="header flex flex-row items-center">
                  <Image
                    className="rounded-full m-4"
                    src={Openai}
                    alt="action"
                    width={64}
                  />
                  <h1 className="text-xl font-semibold">ChatGPT</h1>
                </div>
                <p className="m-auto min-h-[200px]">
                  A large language model that can be used to help answer
                  questions as well as clarifying text that may need alternate
                  way of explaining. This technology can scan Images, simplify
                  paragraphs and provide alternative detailed answers.
                </p>
              </div>

              <div className="m-4 md:m-2 flex flex-col md:w-1/3">
                <div className="header flex flex-row items-center">
                  <Image
                    className="rounded-full m-4"
                    src={PDFai}
                    alt="action"
                    width={64}
                  />
                  <h1 className="text-xl font-semibold">PDF.ai</h1>
                </div>
                <p className="m-auto min-h-[200px]">
                  PDF.ai is an AI-powered tool designed to interact with and
                  analyze PDF documents, allowing users to ask questions,
                  extract data, and generate summaries, making document
                  comprehension and research more efficient. It is especially
                  useful in professional settings for automating data extraction
                  and gaining insights from complex texts.
                </p>
              </div>
              <div className="m-4 md:m-2 flex flex-col md:w-1/3">
                <div className="header flex flex-row items-center">
                  <Image
                    className="rounded-full m-4"
                    src={Quillbot}
                    alt="action"
                    width={64}
                  />
                  <h1 className="text-xl font-semibold">Quillbot</h1>
                </div>
                <p className="m-auto min-h-[200px]">
                  Started in 2017 as an app to help students improve their
                  english when writing. Since then, it has evolved into a
                  AI-powered writing platform. They are also partnered with 150
                  universities. They have started expanding the use of AI in
                  their website and app and adding new features to it such as
                  citation, grammar check, summarizer, plagarism check, and more
                </p>
              </div>
            </div>
          </div>

          <div className="proj-ideation p-8  bg-[#a49e8e80] rounded-lg m-8">
            <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
              Design Decisions
            </h2>
            <div className="m-auto flex sm:flex-col lg:flex-row">
              <p className="text-left p-4">
                This was a rigourous process which involved many steps such as
                theory crafting, rule making, character design. We were also
                tasked with determining the flow and gameplay the users
                experienced.
              </p>
            </div>
            <div className="m-auto flex flex-col">
              <h2 className="text-center text-4xl font-medium p-4">
                User Workflow
              </h2>
              <Image className="rounded-xl" src={PPSitemap} alt="sitemap" />
            </div>
          </div>

          <div className="proj-outcome p-8  bg-[#a49e8e80] rounded-lg m-8">
            <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
              Outcome
            </h2>
            <p className="text-center md:text-right p-4">
              At the conclusion of the project the team produced a playable lofi
              physical card game, 3 decks (Fire, Water, Ice) with 12 cards each
              and a menu UI suitable to code for our development team
            </p>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default Aether;
