import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'aetherLogo.png',
  'aetherLogo.png',
  'aetherLogo.png',
  'aetherLogo.png',
  // Add more image paths as needed
];

const AnimatedGallery: React.FC = () => {
  return (
    <div className="gallery flex flex-col items-center p-6 my-6">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="gallery-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img src={src} alt={`Gallery image ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedGallery;
