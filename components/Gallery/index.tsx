"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { AcgGallery } from "@/app/utils/data";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4">
        {AcgGallery.map((img, i) => {
          return (
            <div key={i} className="flex">
              <Image
                alt="ACG"
                src={img.image}
                className=""
                loading="lazy"
                style={{objectFit:"contain", width:"100%"}}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
