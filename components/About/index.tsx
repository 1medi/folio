import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="m-16 p-16 rounded-lg "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col m-auto justify-center items-center text-center">
        <h2 className="text-7xl text-center md:text-8xl lg:text-8xl m-b:4 font-bold">
          About
        </h2>
        <div className="flex flex-grow flex-col">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            A Bit About Me!
          </h3>
          <div className="m-auto">
            <p className="text-md md:text-xl lg:text-2xl text-center text-white m-auto">
              I'm deeply passionate about technology, My curiosity drives me to
              continuously learn and engage with the tech world. Over the last
              two years in BCIT's Digital Design and Development Program, I've
              collaborated with diverse teams to transform innovative ideas into
              reality, often spending long nights debugging to deliver a
              polished product. I am confident that my expertise can help bring
              your product to market, ensuring a high-quality outcome that meets
              your requirements and surpasses your expectations.
            </p>
          </div>
        </div>
        <div className="p-4 flex flex-col m-auto">
          <h3 className="text-2xl text-center font-semibold mb-4">
            I primarily work with:
          </h3>
          <div className="flex flex-col md:flex-row items-start">
            {" "}
            {/* Add items-start to align to top */}
            <div className="m-auto p-2">
              <h4 className="font-semibold">Frontend</h4>
              <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Styled-Components</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="m-auto p-2">
              <h4 className="font-semibold">Frameworks</h4>
              <ul className="list-disc list-inside">
                <li className="p-1">React</li>
                <li className="p-1">Next.js</li>
                <li className="p-1">React Native</li>
                <li className="p-0.5">Expo</li>
              </ul>
            </div>
            <div className="m-auto p-2">
              <h4 className="font-semibold ">Backend</h4>
              <ul className="list-disc list-inside">
                <li className="p-2">MongoDB</li>
                <li className="p-2">Node.js</li>
                <li className="p-2">Express.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
