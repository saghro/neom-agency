import React from 'react';
<<<<<<< HEAD
import womanImage from '../../../assests/outdoor-businessman-having-his-arms-crossed.png';
 
const Hero = () => {
return (
    <div
    className="flex bg-gradient-to-r from-[#A8D9E0] via-[#6A71B3] to-[#C7A2CB] flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins"
  >
<div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
<h1 className="text-3xl lg:text-6xl font-bold mb-4">Formation </h1>
<p className="text-lg lg:text-xl mb-8">Nous vous proposons des formations variées dans des</p>
<p className="text-lg lg:text-xl mb-8">domaines spécifiques tels que le marketing digital, développpement web et mobile..</p>
=======
import womanImage from '../../../assests/female-student-listening-webinar-online.png';
 
const Hero = () => {
return (
    <div className="flex bg-gradient-to-r from-[#A8D9E0] via-[#6A71B3] to-[#C7A2CB] flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins">
    <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
      <h1 className="text-3xl lg:text-6xl font-bold mb-4 animate-left-to-right">Formation </h1>
      <p className="text-2xl font-bold mr-8 mb-8 animate-left-to-right ">(Re)découvrez la communication avec Neom. </p>
    </div>
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e

 
<<<<<<< HEAD
 
 
    <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
      <img src={womanImage} alt="Person holding a laptop" className="h-full object-cover -mr-32" />
=======
  <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
      <img src={womanImage} alt="Person holding a laptop" className="animate-right-to-left 1s h-96 mt-12 w-full object-cover -mr-12" />
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e
    </div>
  </div>
 
 
);
};
 
export default Hero;