"use client";
import Header from "../../../../components/header"
import Footer from "../../../../components/footer"
import Link from "next/link";
import ChuffCarousel from "../../../../components/chuffCarousel"
import { useState } from "react";
import {motion} from "framer-motion"
import Image from "next/image";

export default function ChuffCity() {
  const [isHovered, setIsHovered] = useState(false);
  return(
    <>
    <Header/>
    <main className="mt-10 xl:mt-20 min-h-screen flex flex-col items-center justify-center p-4 m-auto">
          <Link
            href="/#Projects"
            className="absolute top-20 left-10 xl:left-20 mb-4 text-blue-500"
          >
            <motion.h1
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              className="cursor-pointer"
            >
              ← Back to Other Works
            </motion.h1>
          </Link>
          <div className="m-8 flex flex-col xl:flex-row">
            <ChuffCarousel/>
            <div className="text-center m-4 xl:m-8 flex flex-col">
              <h1 className="text-4xl font-bold xl:text-8xl">Chuff CITY</h1>
              <div className="xl:text-xl xl:m-8">
                <p className="p-2">
                  This design encapsulates my love for electronic vaporizers, both nicotine and cannabis!
                </p>
                <p>
                  "Chuff" derives from a slang describing a vape or e-cigarette, originating from the bathrooms of BC High Schools.
                </p>
              </div>
            </div>
        </div>
      </main>
    <Footer/> 
    </>
  )
}