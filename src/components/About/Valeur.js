import React from 'react';
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";
import logo3 from "../../images/logo3.png";

export default function Valeur() {
  return (
    <div className="mt-9 bg-black mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-y lg:divide-y-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="bg-[#A8D9E0] text-white font-bold text-xl p-6 w-full lg:w-auto lg:flex-1">
            <span className="font-bold">1 La créativité </span>
            <br />
            (nourrir votre imagination)
          </div>
          <img src={logo1} alt="Creativity" className="h-48 lg:h-70 w-auto lg:w-23 lg:mr-96 bg-[#A8D9E0] hidden lg:block" />
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="bg-[#C7A2CB] text-white font-bold text-xl p-6 w-full lg:w-auto lg:flex-1">
            <span className="font-bold">2 Le sens d'écoute </span>
            <br />
            (comprendre nos clients)
          </div>
          <img src={logo2} alt="Listening" className="h-48 lg:h-70 w-auto lg:mr-8 bg-[#C7A2CB] hidden lg:block" />
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="bg-[#6A71B3] text-white font-bold text-xl p-6 w-full lg:w-auto lg:flex-1">
            <span className="font-bold">3 l'esprit d'équipe </span>
            <br />
            (pour des projets réussis)
          </div>
          <img src={logo3} alt="Teamwork" className="h-48 lg:h-70 w-auto lg:mr-1 bg-[#6A71B3] hidden lg:block" />
        </div>

        <div className="bg-[#C7A2CB] text-white font-bold text-xl p-6 w-full lg:flex-1">
          <span className="font-bold">4 L'innovation</span>
          <br />
          (pour un avenir <br /> désirable)
        </div>
        
        <div className="bg-[#6A71B3] text-white font-bold text-xl p-6 w-full lg:flex-1">
          <span className="font-bold">5 La communication </span>
          <br />
          (une cohérence <br /> entre nos valeurs et <br /> nos actes)
        </div>
        
        <div className="bg-[#A8D9E0] text-white font-bold text-xl p-6 w-full lg:flex-1">
          <span className="font-bold">6 L'éthique </span>
          <br />
          (le respect et la <br /> confidentialité)
        </div>
      </div>
    </div>
  );
}
