import React from 'react';
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";
import logo3 from "../../images/logo3.png";

export default function Valeur() {
  return (
    <div>
      <div className="mt-9 bg-black mb-16 grid grid-cols-1 md:grid-cols-3 md:w-fit md:divide-x divide-y md:divide-y-0">
        <div className="flex">
          <div className="-mb-16 bg-[#FFBA49] font-bold text-xl text-left pt-32 pl-6">
            <span className="text-white font-bold">1 La créativité </span>
            (nourrir votre imagination)
          </div>
          <img src={logo1} alt="az" className="h-70 w-23 mr-96  bg-[#FFBA49] pl-6 hidden md:block" />
        </div>
      
        <div className="flex">
          <div className="-mb-16 bg-[#9B5C8F] font-bold text-xl text-left pt-32 pl-6">
            <span className="text-white font-bold">2 Le sens d'écoute </span>
            (comprendre nos clients)
          </div>
          <img src={logo2} alt="Z" className="mr-8  pl-16 bg-[#9B5C8F] hidden md:block" />
        </div>
      
        <div className="flex bg-[#299EF3]">
          <div className="-mb-16 bg-[#299EF3] font-bold text-xl text-left pt-32 pl-6">
            <span className="text-white font-bold">3 l'esprit d'équipe </span>
            (pour des projets réussis)
          </div>
          <img src={logo3} alt="A" className="  mr-1  bg-[#299EF3] hidden md:block" />
        </div>
      
        <div className="-mb-16 bg-[#E8A436] font-bold text-xl text-left pt-8 pl-8">
          <span className="text-white font-bold">4 L'innovation</span>
          <br />
          (pour un avenir <br /> désirable)
        </div>
        <div className="-mb-16 bg-[#83537A] font-bold text-xl text-[#fecaca] text-left pt-8 pl-16">
          <span className="text-white font-bold">5 La communication </span>
          <br />
          (une cohérence <br /> entre nos valeurs et <br /> nos actes)
        </div>
        <div className="-mb-16 bg-[#248AD4] font-bold text-xl text-left pt-8 pl-16">
          <span className="text-white font-bold">6 L'éthique </span>
          <br />
          (le respect et la <br /> confidentialité)
        </div>
      </div>
    </div>
  );
}
