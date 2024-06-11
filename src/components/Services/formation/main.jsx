import React from 'react';
import womanImage from '../../../assests/happy-businessman-folding-his-arms-with-is-colleagues-background-removebg-preview 1.png';
 
const Hero = () => {
return (
    <div
    className="flex bg-[#7854F7] flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins"
  >
<div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
<h1 className="text-3xl lg:text-6xl font-bold mb-4">Formation </h1>
<p className="text-lg lg:text-xl mb-8">Nous vous proposons des formations variées dans des</p>
<p className="text-lg lg:text-xl mb-8">domaines spécifiques tels que le marketing digital, développpement web et mobile..</p>

</div>
 
 
 
    <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
      <img src={womanImage} alt="Person holding a laptop" className="h-full object-cover" />
    </div>
  </div>
 
 
);
};
 
export default Hero;