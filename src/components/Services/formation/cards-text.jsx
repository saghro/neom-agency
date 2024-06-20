import React from "react";
import { IoIosGitMerge } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";
import image1 from "../../../assests/1.png"
import image2 from "../../../assests/2.png"
import image3 from "../../../assests/3.png"
const Media = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center px-8 mt-8 mb-6">
      <h1 className="text-3xl font-bold font-Rammetto-One text-center">
        Nous veillons à vous offrir des cours attrayants et interactifs adaptés
        au rythme de chacun disponibles en ligne et peuvent être suivi à tout
        moment.
      </h1>
      <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#6A71B3] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center">
        Développer vos connaissances ainsi que vos compétences avec nos
        formations exclusives
      </h1>
      <div className="flex flex-col md:flex-row justify-around w-full mt-9 space-y-6 md:space-y-0 md:space-x-4">
        <div className="flex flex-col  items-center p-6 border border-gray-200 cursor-pointer shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
          <FaCloud className="text-5xl text-[#C7A2CB]" />
          <h2 className="text-xl font-bold mt-9">Immersive learning</h2>
          <p className="font-bold text-center mt-9">
            Immersive learning : Complétez votre formation avec des cas
            pratiques dans un environnement virtuel
          </p>
        </div>
        <div className="flex flex-col items-center p-6 border border-gray-200 cursor-pointer shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
          <MdDesktopMac className="text-5xl text-[#6A71B3]" />
          <h2 className="text-xl font-bold mt-9">Cours en ligne</h2>
          <p className="font-bold text-center mt-9">
            Grace à la visioconférence, nous vous offrons des formations en
            ligne incluant des outils collaboratifs.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 border cursor-pointer border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
          <IoIosGitMerge className="text-5xl text-[#A8D9E0]" />
          <h2 className="text-xl font-bold mt-9">Blended learning</h2>
          <p className="font-bold text-center mt-9">
            Profitez des avantages des cours en ligne et présentiels adaptés à
            vos attentes et exigences.
          </p>
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#A8D9E0] via-[#6A71B3] to-[#C7A2CB] text-white font-bold py-2 px-4 rounded-xl text-xl mt-8 transition duration-300 transform hover:scale-105">
        Savoir plus
      </button>
    </div>
    <div className="flex flex-col md:flex-row justify-between w-full mt-9 space-y-6 md:space-y-0 md:space-x-4">
      <div className="px-36 py-32 rounded-3xl border ml-4 bg-gradient-to-r from-[#6A71B3] to-[#A8D9E0]"><img src={image1} alt="" /></div>
      <div className="px-36 py-32 rounded-3xl border ml-4 bg-gradient-to-r from-[#6A71B3] to-[#C7A2CB]"><img src={image2} alt="" /></div>
      <div className="px-36 py-32 rounded-3xl border mr-12 bg-gradient-to-r from-[#A8D9E0] to-[#C7A2CB]"><img src={image3} alt="" /></div>
    </div>
    </>
  );
};

export default Media;