import React from 'react';
import personPlaceholder from '../../../images/personwebdev1.png';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gradient-to-r from-[#A8D9E0] to-[#6A71B3] h-screen text-white font-poppins">
      <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Développement Web et Mobile</h1>
        <p className="text-lg lg:text-xl mb-8">
          Optez pour Neom c'est choisir une équipe d'experts qui s’engage à transformer votre site web en un outil puissant et captivant.
        </p>
        <button className="gradient-button px-6 py-3 rounded" style={{ border: '2px solid transparent', borderImageSlice: 1, borderImageSource: 'linear-gradient(to right, #A8D9E0, #6A71B3, #C7A2CB)' }}>
          Play a demo <span className="circle">&gt;</span>
        </button>
      </div>
      <div className="hidden lg:block lg:flex-shrink-0 lg:h-5/6 mt-44">
        <img src={personPlaceholder} alt="Person holding a laptop" className="h-full object-cover" />
      </div>
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
