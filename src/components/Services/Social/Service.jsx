import React from 'react';
  import personPlaceholder from '../../../assests/office.png'; 

    const Hero = () => {
    return (
        <div
        className="flex bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins"
       
      >
   <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
  <h1 className="text-6xl text-white lg:text-6xl font-bold mb-6">Identité de marque 
 
  </h1>
  <p className="text-lg lg:text-xl mb-4">
  Sous les projecteurs...
  </p>
</div>



        <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-20">
        <img src={personPlaceholder} alt="Person holding a laptop" className="h-full object-cover ml-" />
        </div>
      </div>
      
      
    );
    };

    export default Hero;