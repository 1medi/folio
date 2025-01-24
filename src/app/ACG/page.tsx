"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Gallery from "../../../components/Gallery";
import AetherLogo from "/public/aetherLogo.png";

const ACG = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

return (
    <>
      <Header />
<main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#004f2d]">
  <h1 className="text-6xl font-extrabold mb-8 text-center text-[#b2b2b2]">Awesome Card Game (ACG)</h1>
  
  <div className="flex flex-col items-center mb-8">
    <div className="relative">
      <Image src={AetherLogo} width={600} height={300} alt="Aether" className="rounded-lg" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button onClick={toggleModal} className="bg-white p-4 rounded-full shadow-lg">
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 4l8 6-8 6V4z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">This is the modal content.</p>
        <button onClick={toggleModal} className="bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  )}

<div className="grid grid-cols-2 gap-4 max-w-4xl">
    <div className="bg-[#b2e4e0] p-6 rounded-lg shadow-md text-center">
      <h2 className="text-4xl font-bold">251</h2>
      <p className="text-xl">Projects</p>
    </div>
    <div className="bg-[#d1c4e9] p-6 rounded-lg shadow-md text-center">
      <h2 className="text-4xl font-bold">156</h2>
      <p className="text-xl">Awards</p>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center text-white">
      <h2 className="text-4xl font-bold">Clients</h2>
      <p className="text-xl">Apple</p>
    </div>
    <div className="bg-[#ffcc80] p-6 rounded-lg shadow-md text-center">
      <h2 className="text-4xl font-bold">172</h2>
      <p className="text-xl">Global Design Awards</p>
    </div>
  </div>

  <Gallery />
</main>
      <Footer />
    </>
  );
};

export default ACG;
