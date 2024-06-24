import React from 'react';
import { motion } from 'framer-motion';
import personPlaceholder from '../../../images/15.png';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gradient-to-br from-[#A8D9E0] via-[#C7A2CB] to-[#C7A2CB] h-screen text-white font-poppins">
      <motion.div 
        className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" 
        style={{ marginTop: '17vh' }}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 10 }}
      >
        <h1 className="text-4xl lg:text-7xl font-extrabold mb-4">Communication</h1>
        <h3 className="text-lg lg:text-xl font-bold mb-8 text-center">
        Engagez, inspirez, fidélisez          </h3>
      </motion.div>
      <motion.div 
        className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <motion.img 
          src={personPlaceholder} 
          alt="Person holding a laptop" 
          className="h-full object-cover"
          style={{ transform: 'scale(0.64)' }} // Shrinking the image size by 20% from the original scale of 0.8
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <style jsx>
        {`
          .gradient-button:hover {
            animation: gradient-border-animation 2s infinite;
          }

          @keyframes gradient-border-animation {
            0% { border-image: linear-gradient(to right, #A8D9E0, #6A71B3, #C7A2CB) 1; }
            50% { border-image: linear-gradient(to right, #C7A2CB, #A8D9E0, #6A71B3) 1; }
            100% { border-image: linear-gradient(to right, #A8D9E0, #6A71B3, #C7A2CB) 1; }
          }
        `}
      </style>

    </div>
  );
};

export default Hero;

