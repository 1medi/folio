"use client";
import Image from "next/image";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Gradey from "../../../../public/carouselImages/GradeyDick.png";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GradeyDick() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header />
      <main className="mt-20 min-h-screen flex flex-col items-center justify-center p-4 m-auto">
        <Link href="/Projects" className="absolute top-20 left-20 mb-4 text-blue-500">
          ← Back to Other Works
        </Link>
        <h1 className="text-4xl">Gradey Dick</h1>
        <div className="body-container">
          <div className="m-8">
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              className="cursor-pointer"
            >
              <Image 
                src={Gradey} 
                alt="Gradey Dick" 
                width={800} 
                height={800} 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          <div>
            <p>Here is some text</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
