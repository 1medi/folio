"use client";
import Image from "next/image";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Gradey from "../../../../public/carouselImages/gradeyDick.webp";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GradeyDick() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header />
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
              <Image
                src={Gradey}
                alt="Gradey Dick"
                className="w-[500px] xl:w-[600px] desktop:w-[700px]"
              />
            <div className="text-center m-4 xl:m-8 flex flex-col">
              <h1 className="text-4xl font-bold xl:text-8xl">Gradey Dick</h1>
              <div className="xl:text-xl xl:m-8">
                <p className="p-2">
                  This design encapsulates my massive adoration for the Toronto
                  Raptors and 13th draft pick{" "}
                  <span className="font-bold">Gradey Dick</span>.
                </p>
                <p>
                  Gradey Dick poured in a career high 32 points on November 12,
                  2024 against the Milwaukee Bucks. Dick also pulled down five
                  rebounds in the game.
                </p>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
