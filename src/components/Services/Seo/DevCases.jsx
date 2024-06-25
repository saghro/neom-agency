import React from 'react';
import Cases from '../../cases';
import Image1 from '../../../assests/marketing1.png';
import Image2 from '../../../assests/marketing2.png';
import Image3 from '../../../assests/marketing3.png';

 
const DevCases = () => {
  const colors = ['#A8D9E0', '#C7A2CB', '#6A71B3', '#B3A2D9'];
 
  return (
    <div>
      <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center">Etude des cas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Cases
          imageSrc={Image1}
          title="Tac box"
          text="Un audit approfondie, une étude Benchmarking, des stratégies de positionnement"
          backgroundColor={colors[0]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases
          imageSrc={Image2}
          title="RMA"
          text="Stratégie de lancement, stratégie de différenciation, marketing d'influence "
          backgroundColor={colors[1]}
        />
        {/* <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases
          imageSrc={Image3}
          title="Random Title 3"
          text="This is a random paragraph for the third case."
          backgroundColor={colors[2]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div> */}
        {/* <Cases
          imageSrc={Image}
          title="Random Title 4"
          text="This is a random paragraph for the fourth case."
          backgroundColor={colors[3]}
        /> */}
      </div>
    </div>
  );
}
 
export default DevCases;