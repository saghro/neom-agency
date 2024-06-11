
import React from 'react';
import womanImage from '../../../assests/woman.png';
const Hero = () => {
return (
    <div
    className="flex bg-[#7854F7] flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins"
  >
<div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
<h1 className="text-3xl lg:text-6xl font-bold mb-4">Social Media Marketing </h1>
<p className="text-lg lg:text-xl mb-8">
Propulsez votre présence en ligne avec Neom, des services variés adaptés à vos besoins.
</p>

</div>



    <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
      <img src={womanImage} alt="Person holding a laptop" className="h-full object-cover" />
    </div>
  </div>
 
 
);
};

export default Hero;