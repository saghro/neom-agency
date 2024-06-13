import React from 'react';
import { FaUsers } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 mt-8 ">
      <h1 className="text-3xl font-bold font-Rammetto-One text-[#6A71B3] text-center">
        Boostez votre présence en ligne grâce à nos services et notre expertise en marketing digital et en marketing de contenu...
      </h1>
      <h1 className="text-3xl font-bold font-Rammetto-One text-[#C7A2CB] mt-8 text-center">
        Découvrez le potentiel des médias sociaux et transformez les interactions en résultats concrets
      </h1>
      <div className="flex flex-col md:flex-row justify-around w-full mt-9 space-y-6 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
          <FaUsers className="text-5xl text-[#C7A2CB]" />
          <h2 className="text-xl font-bold mt-9">Création de contenu ciblé</h2>
          <p className='text-center mt-9'>Nous nous engageons à vous fournir un contenu pertinent destiné à votre cible afin de générer des leads de qualité et augmenter vos conversions.</p>
        </div>
        <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
          <BiSolidLike className="text-5xl text-[#C7A2CB]" />
          <h2 className="text-xl font-bold mt-9">Optimisation des KPIs</h2>
          <p className='text-center mt-9'>La compréhension, l'analyse, et le suivi des indicateurs de performance de vos plateformes sociaux  </p>
        </div>
        <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
          <FaUserCircle className="text-5xl text-[#C7A2CB]" />
          <h2 className="text-xl font-bold mt-9">Des stratégies sur mesure</h2>
          <p className='text-center mt-9'>Des stratégies alignées avec votre vision et objectifs pour marquer votre personnalité et gagner la confiance de vos clients </p>
        </div>
      </div>
      <button className="bg-[#C7A2CB] hover:bg-[#6A71B3] text-white font-bold py-2 px-4 mt-8 transition duration-300 transform hover:scale-105 rounded-full">
        Savoir plus
      </button>
    </div>
  );
};

export default Media;