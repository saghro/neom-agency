import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-6 bg-white transform transition duration-300 hover:bg-gradient-to-r hover:from-[#c7a2cb] hover:to-[#6a71b3] hover:text-white flex flex-col justify-between m-4">
      <style>
        {`
          .hover\\:bg-gradient-to-r:hover {
            background: linear-gradient(116deg, #c7a2cb, #6a71b3, #a8d9e0);
            background-size: 600% 600%;
            animation: AnimationName 6s ease infinite;
          }

          @keyframes AnimationName {
            0%{background-position:0% 30%}
            50%{background-position:100% 71%}
            100%{background-position:0% 30%}
          }
        `}
      </style>
      <div>
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl text-black">
            <span className="text-5xl">
              {icon}
            </span>
          </div>
        </div>
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
      </div>
    </div>
  );
};

export default Card;
