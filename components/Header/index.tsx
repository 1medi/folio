"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import Wordmark from "../Wordmark";

function useBoundedScroll(threshold: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious() ?? 0;
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  let { scrollYBoundedProgress } = useBoundedScroll(400);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <div className="sticky top-0 z-50 w-full overflow-hidden text-white">
      <motion.header
        style={{
          height: useTransform(
            scrollYBoundedProgressDelayed,
            [0, 1],
            [80, 50]
          ),
          backgroundColor: useMotionTemplate`rgb(0 0 0 / ${useTransform(
            scrollYBoundedProgressDelayed,
            [0, 1],
            [1, 0.1]
          )})`,
        }}
        className="flex h-20 w-full shadow backdrop-blur-md"
      >
        <div className="flex w-full items-center justify-between px-8">
          <a href="/" className="flex flex-row items-center">
            <Wordmark />
            <motion.p
              style={{
                scale: useTransform(
                  scrollYBoundedProgressDelayed,
                  [0, 1],
                  [1, 0.9]
                ),
              }}
              className="flex items-center p-4 text-xl font-semibold uppercase"
            >
              Madi Tabon
            </motion.p>
          </a>

          <motion.nav
            style={{
              opacity: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0]
              ),
            }}
            className="flex space-x-4 text-sm font-medium text-slate-400"
          >
            <motion.a
              href="/#projects"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                color: isHovered ? "#DD8143" : "",
                scale: isHovered ? 1.15 : 1
              }}
              transition={{ ease: "backInOut" }}
            >
              Projects
            </motion.a>
            <motion.a
              href="/#about"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              animate={{
                color: isHovered1 ? "#DD8143" : "",
                scale: isHovered1 ? 1.15 : 1
              }}
              transition={{ ease: "backInOut" }}
            >
              About
            </motion.a>
            <motion.a
              href="/#contact"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              animate={{
                color: isHovered2 ? "#DD8143" : "",
                scale: isHovered2 ? 1.15 : 1
              }}
              transition={{ ease: "backInOut" }}
            >
              Contact
            </motion.a>
          </motion.nav>
        </div>
      </motion.header>
    </div>
  );
}

let clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);