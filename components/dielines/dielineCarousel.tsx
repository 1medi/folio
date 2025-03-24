import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ZootJuice1 from './zootJuice1';
import ZootJuice2 from './zootJuice2';
import ZootJuice3 from './zootJuice3';

const DielineCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dielines = [<ZootJuice1 />, <ZootJuice2 />, <ZootJuice3 />];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dielines.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dielines.length) % dielines.length);
  };

  return (
    <div className="carousel flex flex-row mx-8">
      <motion.button 
        onClick={prevSlide} 
        whileHover={{ scale: 1.25 }} 
        className="flex items-center justify-center"
      >
        <FaArrowLeft />
      </motion.button>
      <motion.div 
        className="carousel-content w-full mx-24"
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {dielines[currentIndex]}
      </motion.div>
      <motion.button 
        onClick={nextSlide} 
        whileHover={{ scale: 1.25 }} 
        className="flex items-center justify-center "
      >
        <FaArrowRight />
      </motion.button>
    </div>
  );
};

export default DielineCarousel;
