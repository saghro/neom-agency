import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white transform transition duration-300 hover:bg-orange-500 hover:text-white flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-4 text-5xl">
          {icon}
        </div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">
          {description}
        </p>
      </div>
      <button className="mt-4 px-4 py-2 bg-orange-500 border-2 border-white text-white rounded-full hover:bg-white hover:text-orange-500 transition duration-300">
        Savoir Plus
      </button>
    </div>
  );
};

export default Card;
