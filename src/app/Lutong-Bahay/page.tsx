"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import LBBanner from "../../../components/PageBanners/LBBanner";
import FramerCarousel from "../../../components/FramerCarousel";
import FadeIn from "../utils/fadein";
const LutongBahay = () => {


  return (
    <>
      <Header />
      <div className="snap-y snap-start">
      <LBBanner />
      </div>

      <main className="snap-start min-h-screen flex flex-col items-center justify-center p-4 m-auto">
        <motion.section className="w-full">
          <FadeIn className="w-2/3 m-auto my-4 bg-[#a49e8e80] rounded-lg justify-center items-center p-8  flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4 m-4">
                Tools Used
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">Figma</li>
                <li className="text-2xl p-2">Vite</li>
                <li className="text-2xl p-2">React</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4 m-4">
                Key Features
              </h2>
              <ul className="p-2 text-center">
                <li className="text-2xl p-2">Filipino Recipes</li>
                <li className="text-2xl p-2">Responsive Design</li>
                <li className="text-2xl p-2">Skill Library</li>
              </ul>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row">
            <FadeIn className="about p-8 lg:w-1/2 bg-[#a49e8e80] rounded-lg m-4">
              <h2 className="text-3xl text-center lg:text-left bg-[#3A3F2D] rounded-lg p-4">
                What is Lutong Bahay?
              </h2>
              <p className="p-4 text-center lg:text-left">
                Lutong Bahay is a Filipino cookbook app that allows users to
                easily customize recipes. One of the key features is the ability
                to adjust serving sizes, so when users change the number of
                servings, the app automatically updates the ingredient amounts.
                We also included an ingredient substitution feature, which
                suggests alternatives for items that might be unavailable or
                need to be replaced due to dietary restrictions. This makes it
                easier for users to cook Filipino dishes no matter where they
                are or what ingredients they have on hand.
              </p>
            </FadeIn>

            <FadeIn className="proj-ideation lg:w-1/2  p-8 m-4 bg-[#a49e8e80] rounded-lg">
              <h2 className="text-3xl text-center md:text-right bg-[#3A3F2D] rounded-lg p-4">
                Challenges
              </h2>
              <p className="text-center lg:text-right p-4">
                There was an issue when implementing a reliable cookbook API
                specifically for filipino dishes, this resulted in the team
                creating our own "fake" api in which we put in our own data to
                use on the web app.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col lg:flex-row">
            <FadeIn className="proj-ideation lg:w-1/2 p-8 m-4 bg-[#a49e8e80] rounded-lg">
              <h2 className="text-3xl text-center md:text-left bg-[#3A3F2D] rounded-lg p-4">
                Design Decisions
              </h2>
              <div className="m-auto flex flex-col  p-4 lg:flex-row">
                <div className="flex-row justify-center items-center">
                  <h1 className="text-2xl font-semibold">Font:</h1>
                  <p className="font-xl font-medium">Berkshire Swash</p>
                  <p>
                    This type was used due it's whimsical feel and yet readable
                    script font. Its unique swashes and smooth curves make it
                    great for headings, branding, or designs that need a touch
                    of personality without sacrificing legibility.
                  </p>
                </div>

                <div className="flex-row justify-center items-center p-4 ">
                  <h1 className="text-2xl font-semibold"> Colors: </h1>
                  <div className="flex flex-row justify-around lg:flex-row">
                    <div className="w-[64px] h-[64px] p-4 m-4 bg-[#FF012D]" />
                    <div className="w-[64px] h-[64px] p-4 m-4 bg-[#012D5E]" />
                    <div className="w-[64px] h-[64px] p-4 m-4 bg-[#E98704]" />
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="proj-outcome p-8 m-4 lg:w-1/2  bg-[#a49e8e80] rounded-lg">
              <h2 className="text-3xl bg-[#3A3F2D] rounded-lg text-center md:text-right p-4">
                Outcome
              </h2>
              <p className="text-center md:text-right p-4">
                On the website, users are able to create and share recipes, as
                see some of the ones already included which you can add to the
                shopping list and bring with you to your next supermarket run!
              </p>
            </FadeIn>
          </div>
        </motion.section>
        <FramerCarousel />
        
      </main>
      <div className="snap-start">
          <Footer />
        </div>
    </>
  );
};

export default LutongBahay;
