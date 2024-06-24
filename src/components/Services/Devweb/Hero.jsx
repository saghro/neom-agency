import React from 'react';
import { motion } from 'framer-motion';
import personPlaceholder from '../../../images/laptopimg.png';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gradient-to-r from-[#A8D9E0] to-[#6A71B3] h-screen text-white font-poppins">
      <motion.div 
        className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" 
        style={{ marginTop: '17vh' }}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 20 }} // Increased stiffness for a slightly faster animation
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Développement Web et Mobile</h1>
        <h3 className="text-lg lg:text-xl mb-8">
        Vos outils, clés en main, disponibles sur tous les supports!</h3>
      </motion.div>
      <motion.div 
        className="hidden lg:block lg:flex-shrink-0 lg:h-5/6 mt-44"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 60 }} // Increased stiffness for a slightly faster animation
      >
        <motion.img 
          src={personPlaceholder} 
          alt="Person holding a laptop" 
          className="h-full object-cover"
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
