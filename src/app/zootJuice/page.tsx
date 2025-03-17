"use client";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ZootJuiceCarousel from "../../../components/zootJuiceCarousel";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "../utils/fadein"

export default function ZootJuice() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeIn>
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
          <ZootJuiceCarousel />
          <div className="text-center m-4 xl:m-8 flex flex-col">
            <h1 className="text-4xl font-bold xl:text-8xl">Zoot Juice</h1>
            <div className="xl:text-xl xl:m-8">
              <p className="p-2">
                Zoot Juice is a cannabis-infused beverage brand by Pigeon Park Brewing. This project showcases the can designs for their three flagship flavors: Berries and Cherries, Yuzu Lemon, and Moscow Mule.
              </p>
              <p className="p-2">
                Each can features a distinctive color palette that reflects its flavor profile, while maintaining brand consistency through the playful "Zoot" character and clean, modern typography.
              </p>
              <p className="p-2">
              The design process for Zoot Juice focused on creating a cohesive brand identity while giving each flavor its own distinct personality. The color schemes were carefully selected to evoke the taste profile of each beverage, with red tones for Berries and Cherries, yellow for Yuzu Lemon, and green for Moscow Mule.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </FadeIn>
  );
}
