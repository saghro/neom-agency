import React from "react";
import { IoIosGitMerge } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";
import image1 from "../../../assests/top-view-internet-communication-network-with-laptop.jpg"
import image2 from "../../../assests/no-people-office-with-multiple-computers-customer-service-desk-call-center-helpline-support-give-telecommunication-assistance-empty-helpdesk-with-client-telephony-reception.jpg"
import "./styles.css";

const Media = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-8 mt-8 -mb-44">
        <div className="flex">
        <img src={image1} className="shadow-xl ml-6 w-full h-96 rounded-xl " alt="a" />
        <h1 className="align-center ml-6 mt-36 text-2xl font-bold font-Rammetto-One text-center">
        Dans un monde où le digital évolue à une vitesse fulgurante, 
        NEOM vous aide à préparer vos équipes aux défis de demain. 
        </h1>
        </div>
        <div className="flex mt-6">
        <h1 className="text-2xl font-bold font-Rammetto-One mt-20 text-center">
        En vous offrant des sessions de formation interactives, engageantes et attrayantes, 
        qui s'appuient sur les dernières avancées technologiques à l’instar de la réalité virtuelle et 
        l'intelligence artificielle, Neom Agency est assurément le partenaire de votre succès. 
        </h1>
        <img src={image2} alt="" className="shadow-xl ml-6 w-full h-96 rounded-xl "/>
        </div>
        <h3 className="text-center mt-8">Nos spécialistes, ultra-connectés et à l'affût des tendances émergentes, vous transmettent les compétences nécessaires pour rester à la pointe de l'innovation et découvrir tous les secrets de la communication, d’aujourd’hui et de demain. </h3>
        <div className="flex flex-col md:flex-row justify-around w-full mt-9 space-y-6 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center p-6 border border-gray-200 cursor-pointer shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
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

        <div className="mx-auto flex -mt-52 min-h-screen max-w-screen-sm items-center justify-center">
          <a href="#" className="hover:scale-105 codepen-button relative block text-white mx-auto cursor-pointer font-semibold rounded-2xl overflow-hidden p-0.5 isolation-auto">
            <span className="relative block px-5 py-2 text-xl bg-white text-black rounded-xl h-full">
              Savoir plus
            </span>
          </a>
        </div>    
      </div>
    </>
  );
};

export default Media;
