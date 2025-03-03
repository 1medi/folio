"use client";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import QuackCarousel from "../../../../components/QuackCarousel";
import Link from "next/link";
import {motion} from "framer-motion"
import { useState } from "react";

export default function Quack() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Header />
      <main className="mt-12 xl:mt-20 min-h-screen flex flex-col items-center justify-center p-4 m-auto">
      <Link
            href="/#Projects"
            className="absolute top-20 xl:top-24 left-10 xl:left-20 mb-4 text-blue-500"
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
          <QuackCarousel />
          <div className="text-center m-4 xl:m-8 flex flex-col">
              <h1 className="text-4xl font-bold xl:text-8xl">Quack N' Cluck</h1>
              <div className="xl:text-xl xl:m-8">
                <p className="p-2">
                  This menu design is for Quack N' Cluck a cozy diner! We were tasked in showcasing an ability to create a distinct layout.
                </p>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
