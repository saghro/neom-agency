import React from 'react';
<<<<<<< HEAD
import personPlaceholder from '../../../images/personwebdev1.png';
import './button.css';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gradient-to-r from-[#A8D9E0] to-[#6A71B3] h-screen text-white font-poppins">
      <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Développement Web et Mobile</h1>
        <p className="text-lg lg:text-xl mb-8">
          Optez pour Neom c'est choisir une équipe d'experts qui s’engage à transformer votre site web en un outil puissant et captivant.
        </p>
        <button className="custom-button">Play a demo <span className="circle">&gt;</span></button>
      </div>
      <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
        <img src={personPlaceholder} alt="Person holding a laptop" className="h-full object-cover" />
      </div>
=======
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
        transition={{ type: 'spring', stiffness: 10 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Développement Web et Mobile</h1>
        <h3 className="text-lg lg:text-xl mb-8">
        Vos outils, clés en main, disponibles sur tous les supports!</h3>
      </motion.div>
      <motion.div 
        className="hidden lg:block lg:flex-shrink-0 lg:h-5/6 mt-44"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
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
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e
    </div>
  );
};

<<<<<<< HEAD
export default Hero;
=======
export default Hero;
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e
