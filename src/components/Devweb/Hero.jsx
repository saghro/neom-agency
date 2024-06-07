import React from 'react';
import background from '../../images/backgroundwebdev.png'; // Adjust the path as necessary
import personPlaceholder from '../../images/personwebdev.png'; // Adjust the path as necessary

const Hero = () => {
  return (
    <div
      className="flex items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-xl">
        <h1 className="text-8xl font-bold mb-4">Développement Web et Mobile</h1>
        <p className="text-xl mb-8">
          Nous vous accompagnons dans le conseil, la mise en place, le suivi et l’optimisation
          des campagnes de référencement organique et payant pour réussir vos projets.
        </p>
        <button className="bg-white text-black py-3 px-6 rounded text-lg">Play a demo</button>
      </div>
      <div className="hidden lg:block lg:flex-shrink-0 lg:ml-32 lg:h-full mt-16">
        <img src={personPlaceholder} alt="Person holding a laptop" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
