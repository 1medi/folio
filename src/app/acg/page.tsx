"use client";
import { motion } from "framer-motion";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ACGBanner from "../../../components/pageBanners/acgBanner";
import NextVideo from "next-video";
import AcgV from "../../../videos/acgpromo.mp4";
import Lofi from "../../../videos/lofi.mp4";
import Image from "next/image";
import ACGColors from "/public/acg/colors.webp";
import ACGMeasurements from "/public/acg/measurements.webp";
import ACGType from "/public/acg/typography.webp";
import ACGLogo from "/public/acg/logo.webp";
import FadeIn from "../utils/fadein";

const ACG = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen ">
        <div className="snap-y snap-start">
          <ACGBanner />
        </div>

        <motion.section className="snap-start w-full ">
          <FadeIn className="mt-10 flex flex-col xl:flex-row">
            <FadeIn className=" m-4 xl:ml-8 xl:mr-4 bg-[#a49e8e80] rounded-lg justify-center items-center p-8  flex flex-col md:flex-row">
              <div className="lg:p-4">
                <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                  Tools Used
                </h2>
                <ul className="p-2 text-center">
                  <li className="text-2xl p-2 lg:p-5">Figma</li>
                  <li className="text-2xl p-2 lg:p-5">Tabletop Simulator</li>
                </ul>
              </div>
              <div className="lg:p-4">
                <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                  Key Features
                </h2>
                <ul className="p-2 text-center">
                  <li className="text-2xl lg:p-2">3 Elemental Decks!</li>
                  <li className="text-2xl lg:p-2">Character Abilites</li>
                  <li className="text-2xl lg:p-2">Unique Game Mechanics!</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn className="about  m-4 xl:mr-8 xl:ml-4  p-8 bg-[#a49e8e80] rounded-lg">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
                What is ACG?
              </h2>
              <p className="p-4 xl:text-2xl xl:flex xl:justify-center xl:items-center">
                In ACG: Aspect of Elements, players engage in a strategic card
                game where they command elemental forces in turn-based battles.
                Choose your elemental affinity wisely – fire, water, earth, or
                air – as each offers unique strengths and abilities. Build your
                deck strategically, combining spells, creatures, and artifacts
                to outmaneuver your opponents.
              </p>
            </FadeIn>
          </FadeIn>

          <div className="flex flex-col lg:flex-row w-full">
            <FadeIn className="proj-ideation p-8 bg-[#a49e8e80] m-4 xl:m-8 xl:mr-4 rounded-lg">
              <h2 className="text-3xl text-center xl:text-left bg-[#3A3F2D] rounded-lg p-4">
                Project Ideation
              </h2>
              <div className="justify-center items-center flex flex-col p-4">
                <p className="text-left p-4">
                  At the conclusion of the project the team produced a playable
                  lofi physical card game, 3 decks (Fire, Water, Ice) with 12
                  cards each and a menu UI suitable to code for our development
                  team
                </p>
                <div className="flex justify-center items-center w-[300px] lg:w-[500px] lg:m-auto">
                  <NextVideo
                    className="m-4"
                    style={{ zIndex: 1, height: "100%" }}
                    src={Lofi}
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn className="proj-outcome p-8 flex flex-col bg-[#a49e8e80] m-4 xl:m-8 xl:ml-4 rounded-lg">
              <h2 className="text-3xl text-center xl:text-right bg-[#3A3F2D] rounded-lg p-4">
                Outcome
              </h2>
              <div className=" justify-center items-center flex flex-col  p-4">
                <p className="text-right p-4">
                  At the conclusion of the project the team produced a playable
                  lofi physical card game, 3 decks (Fire, Water, Ice) with 12
                  cards each and a menu UI suitable to code for our development
                  team
                </p>
                <div className="flex justify-center items-center w-[300px] lg:w-[500px] lg:m-auto">
                  <NextVideo
                    className="m-4"
                    style={{ zIndex: 1, height: "100%" }}
                    src={AcgV}
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="proj-styleguide p-4 bg-[#a49e8e80] m-4 xl:m-8 xl:mt-4 rounded-lg flex flex-col ">
            <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
              Styleguide
            </h2>

            <div className="flex p-4 flex-col w-full justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="Colors flex-col justify-center items-center m-auto lg:m-16">
                <div className="photo-container w-full  m-4 flex">
                  <Image
                    src={ACGColors}
                    alt="ACG color palette"
                    className="rounded-lg w-full m-2"
                  />
                </div>
                <h2 className="font-bold p-2 xl:text-2xl desktop:p-4 text-center ">
                  Core Colors
                </h2>
                <ul className="w-full text-center p-4 desktop:text-2xl ">
                  <li className="p-2 desktop:p-4">
                    <span className="font-bold">#C1121F (Bright Red)</span> :
                    For bold accents and energetic highlights.
                  </li>
                  <li className="p-2 desktop:p-4">
                    <span className="font-bold">#FDF0D5 (Cream)</span> : A
                    neutral base for balance and warmth.
                  </li>
                  <li className="p-2 desktop:p-4">
                    <span className="font-bold">#2274A5 (Deep Blue)</span> : For
                    contrast and reliability.
                  </li>
                  <li className="p-2 desktop:p-4">
                    <span className="font-bold"> #DB9B39 (Gold)</span> : Adds
                    sophistication and premium vibes.
                  </li>
                </ul>
              </div>


                <div className="flex flex-col justify-center m-12 items-center">
                  <div className="photo-container flex m-4 ">
                    <Image
                      src={ACGMeasurements}
                      alt="ACG measurements guide"
                      className="m-2 rounded-lg w-full"
                    />
                  </div>
                  <h2 className="font-bold p-2 xl:text-2xl desktop:p-4 text-center ">
                    Measurements
                  </h2>
                  <ul className="w-full text-center m-4 desktop:text-2xl">
                    <li className="p-2 desktop:p-4">
                      <span className="font-bold">#C1121F (Bright Red)</span>:
                      For bold accents and energetic highlights.{" "}
                    </li>
                    <li className="p-2 desktop:p-4">
                      <span className="font-bold">#FDF0D5 (Cream)</span>: A
                      neutral base for balance and warmth.{" "}
                    </li>
                    <li className="p-2 desktop:p-4">
                      <span className="font-bold">#2274A5 (Deep Blue)</span>:
                      For contrast and reliability.
                    </li>
                    <li className="p-2 desktop:p-4">
                      <span className="font-bold">#DB9B39 (Gold)</span>: Adds
                      sophistication and premium vibes.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col justify-center m-12 items-center">
                  <div className="photo-container">
                    <Image
                      src={ACGType}
                      alt="ACG typography"
                      className="rounded-lg m-2 w-full"
                    />
                  </div>
                  <p className="w-full text-center desktop:text-2xl">
                    Dragon Hunter gives off inviting but serious at the same
                    time. It combines the classic fantasy style with a
                    modernized, approachable look.
                  </p>
                </div>

                <div className="flex flex-col justify-center m-12 items-center">
                  <div className="photo-container ">
                    <Image
                      src={ACGLogo}
                      alt="ACG logo"
                      className="w-full rounded-lg m-2"
                    />
                  </div>
                  <p className="w-full text-center m-4 desktop:text-2xl ">
                    The winged cards and the "ACG: Aspect of Elements" logo
                    blend themes of imagination and strategy, possibly alluding
                    to collectible card games or a design process inspired by
                    game-like creativity.
                  </p>
                </div>
            </div>
          </FadeIn>
        </motion.section>
        <div className="snap-start">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default ACG;
