import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function AboutAe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Detects when it's in viewport
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isInView) {
      setIsVisible(false); // Triggers exit animation when out of view
    } else {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "exit"}
        transition={{ duration: 0.3, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
          exit: { opacity: 0, scale: 0.8 }, // Custom exit animation
        }}
        className="About-App flex justify-center flex-col "
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "exit"}
          transition={{ duration: 0.3, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
            exit: { opacity: 0, scale: 0.8 }, // Custom exit animation
          }}
          className="about p-8 bg-[#a49e8e80] rounded-lg m-4 mb-0 lg:mb-auto "
        >
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            What is Aether?
          </h2>
          <p className="p-4 lg:text-lg text-left">
            Aether’s unique approach allows our audience to scan paper forms and
            upload documents to their mobile devices, convert them into editable
            digital versions, and simplify complicated terminology with a click
            of a buttton. Additionally, by addressing the administrative burden
            many Canadians face—especially the millions supporting elderly
            family members
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "exit"}
          transition={{ duration: 0.3, delay: 0.75 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
            exit: { opacity: 0, scale: 0.8 }, // Custom exit animation
          }}
          className="aboutAe p-8 bg-[#a49e8e80] rounded-lg m-4 mb-0 lg:mb-auto  "
        >
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            Identifying The Issue
          </h2>
          <p className="p-4 text-left lg:text-lg">
            <span className="font-bold text-xl">Did you know? </span>
            Caregivers spend up to an average of 10-15 hours per week managing
            forms and paperwork! Through the team's research and surveying, it
            was found that caregivers felt:
          </p>
          <ul className=" text-center font-bold lg:text-lg xl:text-xl  ">
            <li>Repetitive paperwork is tiring understanding </li>
            <li>Learning legal terms is stressful</li>
            <li>Time spent on forms, meant time lost with loved ones</li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};
