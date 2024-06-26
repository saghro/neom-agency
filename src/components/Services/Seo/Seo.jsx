import React from 'react';
import personPlaceholder from '../../../assests/view - Copie.png';
const Hero = () => {
  return (
    <div
      className=" bg-gradient-to-r from-[#6A71B3] via-[#A8D9E0] to-[#C7A2CB] flex flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins"

    >
      <div className="animate-left-to-right max-w-xl ml-6 mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
        <h1 className="text-3xl lg:text-6xl font-bold mb-4 text-white">Marketing
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          De la conception à l’optimisation   </p>
      </div>



      <div className="animate-right-to-left hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
        <img src={personPlaceholder} alt="Person holding a laptop" className="h-full object-cover" />
      </div>
    </div>


  );
};

export default Hero;
