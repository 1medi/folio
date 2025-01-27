"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ACGBanner from "../../../components/PageBanners/ACGBanner";
import NextVideo from "next-video";
import AcgV from "../../../videos/acgpromo.mp4";
import Lofi from "../../../videos/lofi.mp4";

const ACG = () => {
  return (
    <>
      <Header />
      <ACGBanner />
      <main className="min-h-screen flex flex-col m-auto flex-wrap flex-grow xl:m-24 items-center justify-center p-4 ">
        {/* <div className="p-4 m-12  rounded-xl">
          <Image src={ACG1}  alt="acglogo" />
        </div> */}
        <motion.section className="pr-16 pl-16">
          <div className="tools-used p-12">
            <h2 className="text-3xl">Tools Used</h2>
            <ul className="p-4">
              <li>Figma</li>
              <li>Tabletop Simulator</li>
            </ul>
          </div>
          <div className="about p-12">
            <h2 className="text-3xl">What is ACG?</h2>
            <p>
              In ACG: Aspect of Elements, players engage in a strategic card
              game where they command elemental forces in turn-based battles.
              Choose your elemental affinity wisely – fire, water, earth, or air
              – as each offers unique strengths and abilities. Build your deck
              strategically, combining spells, creatures, and artifacts to
              outmaneuver your opponents.
            </p>
          </div>

          <div className="proj-ideation p-12">
            <h2 className="text-3xl text-right">Project Ideation</h2>
            <div className="mt-8 flex sm:flex-col lg:flex-row">
              <NextVideo style={{zIndex: 1}} className="m-4" width={640} height={360} src={Lofi} />
              <p className="text-right">
                This was a rigourous process which involved many steps such as
                theory crafting, rule making, character design. We were also
                tasked with determining the flow and gameplay the users
                experienced
              </p>
            </div>
          </div>
          <div className="proj-outcome p-12 flex xl:flex-col">
            <h2 className="text-3xl">Outcome</h2>
              <div className="mt-8 flex sm:flex-col lg:flex-row">
                <p className="text-left">
                  At the conclusion of the project the team produced a playable
                  lofi physical card game, 3 decks (Fire, Water, Ice) with 12
                  cards each and a menu UI suitable to code for our development
                  team
                </p>
                <NextVideo
                className="m-4"
                  style={{zIndex: 1}}
                  width={640}
                  height={360}
                  src={AcgV}
                />
              </div>
          </div>
        </motion.section>

        <motion.section>
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
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default ACG;
