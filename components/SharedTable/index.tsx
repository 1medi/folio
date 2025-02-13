"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const TabData = [
  {
    id: 0,
    label: "Key Behaviours",
    icon: "🙆",
    body: (
      <div className="m-4 xl:mb-8">
        <ul className="m-2 xl:text-4xl text-white font-medium text-center">
          <li className="xl:p-2">Uses digital tools like calendars to stay organized</li>
          <li className="xl:p-2">Uses alarms/reminders for deadlines</li>
          <li className="xl:p-2">Uses laptop and smartphone daily</li>
          <li className="xl:p-2">Prioritizes speed and efficiency</li>
          <li className="xl:p-2">Always improving and optimizing tasks</li>
        </ul>
      </div>
    ),
  },
  {
    id: 1,
    label: "Must Haves",
    icon: "🔒",
    body: (
      <div className="m-4 xl:mb-8">
        <ul className="m-2 xl:text-4xl text-white font-medium text-center">
          <li className="xl:p-4">Easy access homepage</li>
          <li className="xl:p-4">Scan physical documents or receive electronically</li>
          <li className="xl:p-4">Good organization to track forms</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    label: "Never Do's",
    icon: "❌",
    body: (
      <div className="m-4 xl:mb-8">
        <ul className="m-2 xl:text-4xl text-white font-medium text-center">
          <li className="xl:p-4">Cluttered layout</li>
          <li className="xl:p-4">Unclear design</li>
          <li className="xl:p-4">Unnecessary navigation steps</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    label: "Key Tasks",
    icon: "🔑",
    body: (
      <div className="m-4 xl:mb-8">
        <ul className="m-2 xl:text-4xl text-white font-medium text-center">
          <li className="xl:p-4">Keeping seniors' records organized</li>
          <li className="xl:p-4">Reviewing forms for accuracy</li>
          <li className="xl:p-4">Understanding UX/UI for efficiency</li>
        </ul>
      </div>
    ),
  },
];

export default function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(TabData[0]);

  return (
    <div style={container}>
      <nav style={nav}>
        <ul style={tabsContainer}>
          {TabData.map((item) => (
            <motion.li
              key={item.id}
              onClick={() => setSelectedTab(item)}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#a49e8e80" : "#eee0",
              }}
              style={tab}
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
  height: "60vh",
  maxHeight: 360,
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

const tab: React.CSSProperties = {
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  background: "black",
  cursor: "pointer",
  height: 24,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  color: "white",
};

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: -2,
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
