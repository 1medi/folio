"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
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
  let { scrollYBoundedProgress } = useBoundedScroll(400);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
<div  className="sticky z-50 mx-auto w-full max-w-3xl flex-1 overflow-hidden text-white">
  <div className="flex-1 overflow-y-scroll">
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
      className="fixed inset-x-0 z-50 flex h-20 shadow backdrop-blur-md"
    >
      <div className="mx-auto flex flex-row w-full max-w-3xl items-center justify-between px-8">
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
          <a href="/#projects">Projects</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </motion.nav>
      </div>
    </motion.header>
  </div>
</div>
  );
}

let clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);
