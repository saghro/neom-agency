import React from 'react';
import { motion } from 'framer-motion';
import personPlaceholder from '../../../images/laptopimg.png';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${window.location.origin}/neom.pdf`;
    link.download = 'neom.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
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
                <div className='flex flex-col sm:flex-row gap-3 mt-12'>
                    <div className="flex justify-center lg:justify-start">
                        <div className="h-14 w-full sm:w-64 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5">
                            <div className="flex h-full w-full items-center rounded-3xl justify-center bg-white text-[#6A71B3]">
                                <button className="text-1xl font-bold">Demander un devis</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <div className="h-14 w-full sm:w-64 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5">
                            <div className="flex h-full w-full items-center rounded-3xl justify-center bg-white">
                                <button
                                    className="text-1xl text-[#6A71B3] font-bold"
                                    onClick={handleDownload}
                                >
                                    Télécharger Notre Plaquette
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
      
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
