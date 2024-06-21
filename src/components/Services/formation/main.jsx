import React from 'react';
import womanImage from '../../../assests/webinar-internet-lesson-distance-university-tutor-educator-online-learning-seniors-online-courses-seniors-additional-education-concept-pinkish-coral-bluevector-isolated-illustration.png';
 
const Hero = () => {
return (
    <div
          className="flex bg-gradient-to-r from-[#A8D9E0] via-[#6A71B3] to-[#C7A2CB] flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins">
      <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
      <h1 className="text-3xl lg:text-6xl font-bold mb-4">Formation </h1>
      <p className="text-2xl font-bold mr-8 mb-8">(Re)découvrez la communication avec Neom. </p>


    </div>

 
 
  <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
      <img src={womanImage} alt="Person holding a laptop" className="h-96 mt-12 w-full object-cover -mr-12" />
    </div>
  </div>
 
 
);
};
 
export default Hero;