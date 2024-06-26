import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 h-screen text-white font-poppins" style={{ background: 'linear-gradient(-45deg, #A8D9E0, #C7A2CB, #6A71B3)', backgroundSize: '400% 400%', animation: 'Gradient 15s ease infinite' }}>
      <motion.div 
        className="max-w-xl mb-8 lg:mb-0 text-center mx-auto" 
        style={{ marginTop: '20vh' }}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 10 }}
      >
        <h1 className="text-4xl lg:text-7xl font-extrabold mb-4">Realisation</h1>
      </motion.div>
      <style jsx>
        {`
          @keyframes Gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;