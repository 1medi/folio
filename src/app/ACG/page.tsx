"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ACGBanner from "../../../components/PageBanners/ACGBanner";
import NextVideo from "next-video";
import AcgV from "../../../videos/acgpromo.mp4";
import Lofi from "../../../videos/lofi.mp4";
import Image from "next/image";
import Gallery from "../../../components/Gallery";

import ACGColors from "/public/ACG/colors.png";
import ACGImagery from "/public/ACG/imagery.png";
import ACGMeasurements from "/public/ACG/measurements.png";
import ACGType from "/public/ACG/typography.png";
import ACGGamem from "/public/ACG/gamemeasurements.png";
import ACGLogo from "/public/ACG/logo.png";

const ACG = () => {
  return (
    <>
      <Header />
      <ACGBanner />
      <main className="min-h-screen flex flex-col flex-wrap flex-grow m-4 lg:m-24 items-center justify-center p-4 rounded-lg">
        {/* <div className="p-4 m-12  rounded-xl">
          <Image src={ACG1}  alt="acglogo" />
        </div> */}
        <motion.section className="bg-[#a49e8d] m-4 p-12 rounded-lg">
          <div className="m-auto justify-center items-center p-8 flex flex-col md:flex-row">
            <div className="p-4">
              <h2 className="text-3xl text-center bg-black rounded-lg p-4">
                Tools Used
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-5">Figma</li>
                <li className="text-2xl p-5">Tabletop Simulator</li>
              </ul>
            </div>
            <div className="p-4">
              <h2 className="text-3xl text-center bg-black rounded-lg p-4">
                Key Features
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">3 Elemental Decks!</li>
                <li className="text-2xl p-2">Character Abilites</li>
                <li className="text-2xl p-2">Unique Game Mechanics!</li>
              </ul>
            </div>
          </div>
          <div className="about p-8 ">
            <h2 className="text-3xl bg-black rounded-lg p-4">What is ACG?</h2>
            <p className="p-4">
              In ACG: Aspect of Elements, players engage in a strategic card
              game where they command elemental forces in turn-based battles.
              Choose your elemental affinity wisely – fire, water, earth, or air
              – as each offers unique strengths and abilities. Build your deck
              strategically, combining spells, creatures, and artifacts to
              outmaneuver your opponents.
            </p>
          </div>

          <div className="proj-ideation p-8">
            <h2 className="text-3xl text-right bg-black rounded-lg p-4">
              Project Ideation
            </h2>
            <div className="m-auto flex sm:flex-col lg:flex-row">
              <NextVideo
                style={{ zIndex: 1 }}
                className="m-4"
                width={640}
                height={360}
                src={Lofi}
              />
              <p className="text-right p-4">
                This was a rigourous process which involved many steps such as
                theory crafting, rule making, character design. We were also
                tasked with determining the flow and gameplay the users
                experienced
              </p>
            </div>
          </div>
          {/* <div className="proj-ideation p-8">
            <h2 className="text-3xl text-left bg-black rounded-lg p-4">
              Design Decisions
            </h2>
            <div className="m-auto flex sm:flex-col lg:flex-row">
              <p className="text-leftt p-4">
                This was a rigourous process which involved many steps such as
                theory crafting, rule making, character design. We were also
                tasked with determining the flow and gameplay the users
                experienced
              </p>
            </div>
          </div> */}
          <div className="proj-outcome p-8 flex flex-col">
            <h2 className="text-3xl text-left bg-black rounded-lg p-4">
              Outcome
            </h2>
            <div className="m-auto flex flex-col lg:flex-row">
              <p className="text-left p-4">
                At the conclusion of the project the team produced a playable
                lofi physical card game, 3 decks (Fire, Water, Ice) with 12
                cards each and a menu UI suitable to code for our development
                team
              </p>
              <NextVideo
                className="m-4 md:w-320"
                style={{ zIndex: 1 }}
                width={640}
                height={360}
                src={AcgV}
              />
            </div>
          </div>
          <div className="proj-styleguide p-8">
            <h2 className="text-3xl text-center bg-black rounded-lg p-4">
              Styleguide
            </h2>
            <div className="flex flex-col md:flex-row m-auto justify-center items-center">
              <div className="Colors p-4">
                <Image src={ACGColors} alt="colors " className="rounded-lg" />
                <p className="w-80 m-4">
                  <span className="font-bold">Core Colors: </span><br />
                  <span className="font-bold">#C1121F (Bright Red)</span> : For bold accents and energetic
                  highlights.<br/> <span className="font-bold">#FDF0D5 (Cream)</span> : A neutral base for balance and
                  warmth.<br/> <span className="font-bold">#2274A5 (Deep Blue)</span> : For contrast and reliability.<br/>
                  <span className="font-bold"> #DB9B39 (Gold)</span> : Adds sophistication and premium vibes.
                </p>
              </div>
              <div className="Everything Else w-1/3 p-4">
                <div>
                  <Image
                    src={ACGImagery}
                    alt="colors"
                    className="m-2 rounded-lg"
                  />
                  <p className="w-80 m-4">
                    <span className="font-bold">Top Left</span>: Highlights
                    whimsy, charm, and individuality—great for evoking humor and
                    creativity. <br />
                    <span className="font-bold">Top Right</span>: Represents
                    strategy and teamwork, adding an element of competition or
                    conquest. <br />
                    <span className="font-bold">Bottom Left</span>: Symbolizes
                    imagination, innovation, and otherworldly
                    inspiration—perfect for futuristic or bold ideas. <br />{" "}
                    <span className="font-bold">Bottom Right</span> : Brings in
                    cartoonish fun, lightheartedness, and approachable design
                    with a nostalgic gaming vibe. <br /> Overall, these visuals
                    align well with projects or themes that blend strategy,
                    creativity, and entertainment.
                  </p>
                </div>
                <div>
                  <Image
                    src={ACGMeasurements}
                    alt="colors"
                    className="m-2 rounded-lg"
                  />
                  <p className="w-80 m-4">
                  <span className="font-bold">Core Colors:</span> <br />
                  <span className="font-bold">#C1121F (Bright Red)</span>: For bold accents and energetic
                    highlights. <span className="font-bold">#FDF0D5 (Cream)</span>: A neutral base for balance and
                    warmth. <span className="font-bold">#2274A5 (Deep Blue)</span>: For contrast and reliability.
                    <span className="font-bold">#DB9B39 (Gold)</span>: Adds sophistication and premium vibes.
                  </p>
                </div>
                <div>
                  <Image
                    src={ACGType}
                    alt="colors"
                    className="m-2 rounded-lg"
                  />
                  <p className="w-80 m-4">
                    Gives off inviting but serious at the same time. It combines
                    the classic fantasy style with a modernized, approachable
                    look.
                  </p>
                </div>
                {/* <div>
                  <Image
                    src={ACGGamem}
                    alt="colors"
                    className="m-2 rounded-lg"
                  />
                  <p className="w-80 m-4">
                    Core Colors: <br />
                    #C1121F (Bright Red): For bold accents and energetic
                    highlights. #FDF0D5 (Cream): A neutral base for balance and
                    warmth. #2274A5 (Deep Blue): For contrast and reliability.
                    #DB9B39 (Gold): Adds sophistication and premium vibes.
                  </p>
                </div> */}

                <div className="flex flex-wrap flex-grow">
                  <Image
                    src={ACGLogo}
                    alt="colors"
                    className="m-2 rounded-lg"
                  />
                  <p className="w-80 m-4">
                    The winged cards and "ACG: Aspect of Elements" logo blend
                    themes of imagination and strategy, possibly alluding to
                    collectible card games or a design process inspired by
                    game-like creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* <motion.section className="bg-[#a49e8d] m-4 p-12 rounded-lg">
          <h3 className="text-8xl text-center p-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </motion.section> */}
      </main>
      <Footer />
    </>
  );
};

export default ACG;
