"use client";
"use client";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Gallery from "../../../components/Gallery";
import Image from "next/image";
import AetherLogo from "/public/aetherLogo.png";
const Aether = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-row items-start justify-center p-4 bg-[#a49e8d]">
        <div className="flex-column">
          <motion.section className="flex flex-row max-w-4xl w-full border-8 border-black shadow-md rounded-lg p-6 mb-8">
          {/* <Image src={AetherLogo} width={306} height={69} alt="Aether" /> */}
          <div
            className="max-w-4xl  p-6 mb-8"
          >
            <h1 className="text-4xl font-bold mb-4 text-center text-[#b2b2b2]">
              Aether
            </h1>
            <div className="flex flex-row">
              <p className="mb-8 text-center text-[#b2b2b2]">
                This is a sample project description. You can replace this text
                with the actual content for each project page.
              </p>
            </div>
          </div>
          </motion.section>

          <motion.section
            className="max-w-4xl w-full bg-[#004f2d] shadow-md rounded-lg p-6 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#b2b2b2]">
              Impact
            </h2>
            <p className="text-[#b2b2b2]">
              Describe the impact of the project here. You can include metrics,
              user feedback, or any other relevant information.
            </p>
          </motion.section>
          <motion.section
            className="max-w-4xl w-full bg-[#004f2d] shadow-md rounded-lg p-6 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#b2b2b2]">
              Technologies Used
            </h2>
            <ul className="list-disc list-inside text-[#b2b2b2]">
              <li>Technology 1</li>
              <li>Technology 2</li>
              <li>Technology 3</li>
            </ul>
          </motion.section>
          <motion.section
            className="max-w-4xl w-full bg-[#004f2d] shadow-md rounded-lg p-6 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#b2b2b2]">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-[#b2b2b2]">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </motion.section>
          <Gallery />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Aether;
