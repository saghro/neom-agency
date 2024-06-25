import React from 'react';
import Cases from '../../Cases.jsx';
import Image from '../../../images/29.png';

const DevCases = () => {
  const colors = ['#A8D9E0', '#C7A2CB', '#6A71B3', '#B3A2D9'];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Our Development Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Cases 
          imageSrc={Image}
          title="Random Title 1"
          text="This is a random paragraph for the first case."
          backgroundColor={colors[0]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Image}
          title="Random Title 2"
          text="This is a random paragraph for the second case."
          backgroundColor={colors[1]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Image}
          title="Random Title 3"
          text="This is a random paragraph for the third case."
          backgroundColor={colors[2]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Image}
          title="Random Title 4"
          text="This is a random paragraph for the fourth case."
          backgroundColor={colors[3]}
        />
      </div>
    </div>
  );
}

export default DevCases;

