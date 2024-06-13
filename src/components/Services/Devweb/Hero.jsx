import React from 'react';
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
    </div>
  );
};

export default Hero;
