"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getImageProps } from "next/image";
import { motion } from "framer-motion";
import PPBanner from "../../../components/PageBanners/PPBanner";
import PPLanding from "../../../public/Pocket-Prof/pplanding.png";
import PPHome from "../../../public/Pocket-Prof/pphome.png";
import PPQuestion from "../../../public/Pocket-Prof/ppquestion.png";
import PPQuiz from "../../../public/Pocket-Prof/ppquiz.png";

import Image from "next/image";
const PocketProf = () => {
  return (
    <>
      <Header />
      <PPBanner />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 ">
        {/* <div className="p-4 m-12  rounded-xl">
          <Image src={ACG1}  alt="acglogo" />
        </div> */}
        <motion.section className="pr-16 pl-16">
          <div className="about p-12">
            <h2 className="text-3xl">What is Pocket Prof?</h2>
            <p>
              "Pocket Prof is a mobile web application goal tracking app that
              promotes a variety of skills a user can learn by gathering
              resources through our ai assistant Oscar. Through its interactive
              user-friendly features, it provides a platform for students and
              individuals alike to improve on themselves and create new goals."
            </p>
          </div>

          <div className="proj-ideation p-12">
            <h2 className="text-3xl text-right">Identifying The Issue</h2>
            <div className="p-8 flex sm:flex-col lg:flex-row">
              <p className="text-right">
                This was a rigourous process which involved many steps such as
                theory crafting, rule making, character design. We were also
                tasked with determining the flow and gameplay the users
                experienced
              </p>
            </div>
          </div>
          <div className="proj-outcome p-12">
            <h2 className="text-3xl">Outcome</h2>
            <div>
              <div className="p-8 flex sm:flex-col lg:flex-row">
                <p className="text-left">
                  At the conclusion of the project the team produced a playable
                  lofi physical card game, 3 decks (Fire, Water, Ice) with 12
                  cards each and a menu UI suitable to code for our development
                  team
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4">
            <div className="grid gap-4">
              <div className="relative w-full">
                <Image
                  className="rounded-lg"
                  src={PPLanding}
                  alt=""
                  layout="responsive"
                  style={{
                    objectFit: "cover",
                    height: "300px", // Adjust height for variation
                  }}
                />
              </div>
              <div className="relative w-full">
                <Image
                  className="rounded-lg"
                  src={PPQuiz}
                  alt=""
                  layout="responsive"
                  style={{
                    objectFit: "cover",
                    height: "300px", // Adjust height for variation
                  }}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative w-full">
                <Image
                  className="rounded-lg"
                  src={PPHome}
                  alt=""
                  layout="responsive"
                  style={{
                    objectFit: "cover",
                    height: "300px", // Adjust height for variation
                  }}
                />
              </div>
              <div className="relative w-full">
                <Image
                  className="rounded-lg"
                  src={PPQuestion}
                  alt=""
                  layout="responsive"
                  style={{
                    objectFit: "cover",
                    height: "300px", // Adjust height for variation
                  }}
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default PocketProf;
