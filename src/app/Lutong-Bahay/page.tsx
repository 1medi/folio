"use client"
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import LBBanner from "../../../components/PageBanners/LBBanner";
import Image from "next/image";
import PPSitemap from "../../../public/Pocket-Prof/PPSitemap.png";
import PPPhone from "../../../components/PPPhone";

const LutongBahay = () => {
  return (
    <>
<Header />
      <LBBanner />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 lg:w-2/3 m-auto">
        <motion.section className="bg-[#a49e8d] m-4 p-12 rounded-lg">
          <div className="m-auto justify-center items-center p-8 flex flex-col md:flex-row">
            <div className="p-4">
              <h2 className="text-3xl text-center bg-black rounded-lg p-4">
                Tools Used
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">Figma</li>
                <li className="text-2xl p-2">Vite</li>
                <li className="text-2xl p-2">React</li>
              </ul>
            </div>
            <div className="p-4">
              <h2 className="text-3xl text-center bg-black rounded-lg p-4">
                Key Features
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">Filipino Recipes</li>
                <li className="text-2xl p-2">Responsive Design</li>
                <li className="text-2xl p-2">Skill Library</li>
              </ul>
            </div>
          </div>
          <div className="about p-8">
            <h2 className="text-3xl text-center bg-black rounded-lg p-4">
              What is Lutong Bahay?
            </h2>
            <p className="p-4">
              Pocket Prof is a mobile web application goal tracking app that
              promotes a variety of skills a user can learn by gathering
              resources through our ai assistant Oscar. Through its interactive
              user-friendly features, it provides a platform for students and
              individuals alike to improve on themselves and create new goals."
            </p>
          </div>
          <div className="proj-ideation p-8">
            <h2 className="text-3xl text-center md:text-right bg-black rounded-lg p-4">
              Identifying The Issue
            </h2>
            <p className="text-right p-4">
              There was a gap found in the ability of finding new skills due to
              the overwhelming surplus of resources available of the internet.
              Through the app ideation proccess, we determined with the help of
              AI, we can collect all the available resources and make it
              available into 1 congestable application: Pocket Prof!
            </p>
          </div>
          <div className="proj-ideation p-8">
            <h2 className="text-3xl text-center md:text-left bg-black rounded-lg p-4">
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
          <div className="proj-outcome p-8">
            <h2 className="text-3xl bg-black rounded-lg text-center md:text-right p-4">
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
  )
}

export default LutongBahay;