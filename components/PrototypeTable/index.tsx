"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HifiCarousel from "../Aether/HifiCarousel";
import LofiCarousel from "../Aether/LofiCarousel";

const TabData = [
  {
    id: 0,
    label: "Lo-Fi",
    icon: "🙆",
    body: (
      <div className="m-4 xl:mb-8">
        <LofiCarousel/>
      </div>
    ),
  },
  {
    id: 1,
    label: "Hi-Fi",
    icon: "🔒",
    body: (
      <div className="m-4 xl:mb-8">
        <HifiCarousel/>
      </div>
    ),
  },
];

export default function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(TabData[0]);

  return (
    <div style={container} className="m-4">
      <nav className="bg-[#3A3F2D] rounded-t-[10px] border-b border-b-[#a49e8e80] h-[56px]">
        <ul style={tabsContainer}>
          {TabData.map((item) => (
            <motion.li
              key={item.id}
              onClick={() => setSelectedTab(item)}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#a49e8e80" : "#eee0",
              }}
              className="rounded-t-[5px] text-center w-full xl:px-[25px] xl:py-[24px] relative bg-black cursor-pointer h-[56px] flex justify-between items-center flex-1 min-w-0 select-none text-sm desktop:text-xl text-white"
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div style={underline} layoutId="underline" />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main style={iconContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={content}
            className="flex justify-center items-center  xl:h-[300px]"
          >
            {selectedTab.body}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
const container: React.CSSProperties = {
  width: "100%",
  height: "80vh",
  // maxHeight: 360,
  borderRadius: 10,
  background: "#3A3F2D",
  overflow: "hidden",
  boxShadow:
    "0 1px 1px rgba(0,0,0,0.075), 0 2px 2px rgba(0,0,0,0.075), 0 4px 4px rgba(0,0,0,0.075), 0 8px 8px rgba(0,0,0,0.075), 0 16px 16px rgba(0,0,0,0.075)",
  display: "flex",
  flexDirection: "column",
};

const nav: React.CSSProperties = {
  background: "#3A3F2D",
  padding: "5px 5px 0",
  borderRadius: "10px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid #a49e8e80  ",
  height: 44,
};

const tabsContainer: React.CSSProperties = {
  display: "flex",
  width: "100%",
};

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: -1,
  left: 0,
  right: 0,
  height: 2,
  background: "#a49e8e80",
};

const iconContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  padding: "28px",
};

const content: React.CSSProperties = {
  width: "100%",
};
