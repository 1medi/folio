"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import PPBanner from "../../../components/PageBanners/PPBanner";
import Image from "next/image";
import PPSitemap from "../../../public/Pocket-Prof/PPSitemap.png";
import PPPhone from "../../../components/PPPhone";

const PocketProf = () => {
  return (
    <>
      <Header />
      <PPBanner />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 m-auto">
        <motion.section className="w-full">
          <div className="w-2/3 m-auto mb-4  bg-[#a49e8e80] rounded-lg justify-center items-center p-8  flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg m-4 p-4">
                Tools Used
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">Figma</li>
                <li className="text-2xl p-2">Next.js</li>
                <li className="text-2xl p-2">Openai</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg m-4 p-4">
                Key Features
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">AI Chat Bot</li>
                <li className="text-2xl p-2">Quiz to Determine Best Skill</li>
                <li className="text-2xl p-2">Skill Library</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="about p-8 lg:w-1/2 bg-[#a49e8e80] rounded-lg m-4">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                What is Pocket Prof?
              </h2>
              <p className="p-4">
                Pocket Prof is a mobile web application goal tracking app that
                promotes a variety of skills a user can learn by gathering
                resources through our ai assistant Oscar. Through its
                interactive user-friendly features, it provides a platform for
                students and individuals alike to improve on themselves and
                create new goals."
              </p>
            </div>

            <div className="proj-ideation lg:w-1/2 p-8 bg-[#a49e8e80] rounded-lg m-4 ">
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

          <div className="flex flex-col lg:flex-row m-4">
            <div className="proj-ideation p-8 bg-[#a49e8e80] rounded-lg lg:w-1/3 lg:mr-4">
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
            </div>

            <div className="user-workflow p-8  bg-[#a49e8e80] rounded-lg lg:w-2/3 lg:ml-4">
              <h2 className="text-center text-4xl font-medium p-4">
                User Workflow
              </h2>
              <Image className="rounded-xl" src={PPSitemap} alt="sitemap" />
            </div>
          </div>

          <div className="proj-outcome p-4 m-8 bg-[#a49e8e80] rounded-lg">
            <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
              Outcome
            </h2>
            <p className="text-center md:text-right p-4">
              At the conclusion of the project the team produced a playable lofi
              physical card game, 3 decks (Fire, Water, Ice) with 12 cards each
              and a menu UI suitable to code for our development team
            </p>
            <PPPhone />
          </div>
        </motion.section>

        {/* <motion.section className="bg-[#a49e8d] m-4 p-12 rounded-lg"></motion.section> */}
      </main>
      <Footer />
    </>
  );
};

export default PocketProf;
