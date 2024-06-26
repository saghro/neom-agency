import React from "react";
import { motion } from 'framer-motion';
import image1 from "../../../assests/presentation_4-Photoroom.png";
import "./styles.css";

const Media = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-8 mt-6 mb-16 lg:mb-44">
        <div className="flex flex-col lg:flex-row">
          <motion.img 
            src={image1} 
            className="shadow-2xl w-full lg:w-1/2 h-96 rounded-xl"
            alt="a"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />      
          <div className="animate-right-to-left mt-6 lg:mt-0 lg:ml-6 lg:mr-20 text-center lg:text-justify">
            <h1 className="bg-gradient-to-r from-[#A8D9E0] via-[#6A71B3] to-[#C7A2CB] text-transparent bg-clip-text font-bold text-2xl mb-6 mt-6">
              (Re)découvrez la communication avec Neom.
            </h1>
            <h1 className="text-md text-justify font-regular font-Rammetto-One">
              Dans un monde où le digital évolue à une vitesse fulgurante, NEOM vous aide à préparer vos équipes aux défis de demain.
              En vous offrant des sessions de formation interactives, engageantes et attrayantes, qui s'appuient sur les dernières avancées technologiques à l’instar de la réalité virtuelle et l'intelligence artificielle, Neom Agency est assurément le partenaire de votre succès.
              Nos spécialistes, ultra-connectés et à l'affût des tendances émergentes, vous transmettent les compétences nécessaires pour rester à la pointe de l'innovation et découvrir tous les secrets de la communication, d’aujourd’hui et de demain.
            </h1>
          </div>
        </div> 

        <div className="mt-6 lg:mt-12 flex justify-center">
          <a href="#" className="hover:scale-105 codepen-button relative block text-white cursor-pointer font-semibold rounded-2xl overflow-hidden p-0.5 isolation-auto">
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