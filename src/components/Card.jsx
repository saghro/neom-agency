import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white transform transition duration-300 hover:bg-[#FFA288] hover:text-white flex flex-col justify-between m-4">
      <div>
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl text-black">
            <span className="text-5xl">
              {icon}
            </span>
          </div>
        </div>
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-base text-center">
          {description}
        </p>
      </div>
      <button className="mt-4 px-4 py-2 bg-[#FFA288] border-2 border-white text-white rounded-full hover:bg-white hover:text-[#FB7752] transition duration-300">
        Savoir Plus
      </button>
    </div>
  );
};

export default Card;
