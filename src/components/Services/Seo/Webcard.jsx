import React from 'react';
import { RiBodyScanFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";

const WebCards = () => {
  const Cards = ({ title, description, icon }) => {
    return (
      <div className="-mt-36 max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white transform transition duration-300 hover:bg-[#FFA288] hover:text-white flex flex-col justify-between ">
        <div>
          <div className="flex justify-center mb-4 text-5xl">
            {icon}
          </div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-base">
            {description}
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-[#FFA288] border-2 border-white text-white rounded-full hover:bg-white hover:text-[#FFA288] transition duration-300.">
          Savoir Plus
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <Cards
          title="Référencement SEO"
          description="Élaborer une stratégie de référencement sur mesure en identifiant vos mots-clés, optimisant votre contenu et en structurant votre site web."
          icon={<RiBodyScanFill />}
        />
        <Cards
          title="Référencement SEA"
          description="Créer et optimiser des publicités payantes dans les pages de résultats des moteurs de recherche, qui vous permettent d’obtenir des résultats plus rapides."
          icon={<IoEyeSharp />}
        />
      </div>
      <button className="mt-8 px-8 py-3 bg-[#FFA288] text-white rounded-full">
        Vous avez un Projet?
      </button>
    </div>
  );
};

export default WebCards;