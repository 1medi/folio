import React from 'react';

const About = () => {
  return (
    <section className="about-section bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-8 text-center">About</h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
<div className="md:w-1/2 mb-8 md:mb-0">
  <h3 className="text-2xl font-semibold mb-4">A Bit About Me!</h3>
  <p className="text-lg text-gray-700 mb-4">
    I'm deeply passionate about technology, My curiosity drives me to continuously learn and engage with the tech world.
  </p>
  <p className="text-lg text-gray-700 mb-4">
    With over two years in the development field, I've collaborated with diverse teams to transform innovative ideas into reality, often spending long nights debugging to deliver a polished product.
  </p>
  <p className="text-lg text-gray-700 mb-4">
    This experience has equipped me with the skills needed to successfully deliver refined products to clients and stakeholders.
  </p>
  <p className="text-lg text-gray-700">
    I am confident that my expertise can help bring your product to market, ensuring a high-quality outcome that meets your requirements and surpasses your expectations.
  </p>
</div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">The tech stack I primarily work in are:</h3>
          <div className="flex">
            <div className="w-1/2">
              <h4 className="font-semibold">Frontend</h4>
              <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Styled-Components</li>
                <li>TailwindCSS</li>
              </ul>
              <h4 className="font-semibold mt-4">Frameworks</h4>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Next.js</li>
                <li>React Native</li>
                <li>Expo</li>
              </ul>
            </div>
            <div className="w-1/2">
              <h4 className="font-semibold">Backend</h4>
              <ul className="list-disc list-inside">
                <li>MongoDB</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
