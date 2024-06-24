import React from "react";
import { motion } from 'framer-motion';
import image1 from "../../../assests/top-view-virtual-reality-simulator-with-laptop-Photoroom.png"
import image2 from "../../../assests/map-lying-wooden-table.jpg"
import image3 from "../../../assests/laptop-with-internet-browser-search-bar-screen.jpg"
import image4 from "../../../assests/communication-social-media-icons-personal-computer.jpg"
import image5 from "../../../assests/hands-holding-smartphone-social-media-concept.jpg"
import image6 from "../../../assests/computer-dark-room-with-graphs-screen.jpg"
import image7 from "../../../assests/oaz.jpg"
import "./styles.css";

const Media = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-center items-center px-8 mt-8 mb-6">
      <h1 className="text-3xl font-bold font-Rammetto-One text-[#7854F7] text-center">
        Nous veillons à vous offrir des cours attrayants et interactifs adaptés
        au rythme de chacun disponibles en ligne et peuvent être suivi à tout
        moment.
      </h1>
      <h1 className="text-3xl font-bold font-Rammetto-One text-[#248AD4] mt-8 text-center">
        Développer vos connaissances ainsi que vos compétences avec nos
        formations exclusives
      </h1>
      <div className="flex flex-col md:flex-row justify-around w-full mt-9 space-y-6 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center p-6 border border-gray-200 cursor-pointer shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
          <FaCloud className="text-5xl text-[#6A71B3]" />
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
          <IoIosGitMerge className="text-5xl text-[#6A71B3]" />
          <h2 className="text-xl font-bold mt-9">Blended learning</h2>
          <p className="font-bold text-center mt-9">
            Profitez des avantages des cours en ligne et présentiels adaptés à
            vos attentes et exigences.
          </p>
=======
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
          <div className="animate-right-to-left mt-6 lg:mt-0 lg:ml-6">
            <h1 className="text-md text-left font-regular font-Rammetto-One">
              Dans un monde où le digital évolue à une vitesse fulgurante, NEOM vous aide à préparer vos équipes aux défis de demain.
              En vous offrant des sessions de formation interactives, engageantes et attrayantes, qui s'appuient sur les dernières avancées technologiques à l’instar de la réalité virtuelle et l'intelligence artificielle, Neom Agency est assurément le partenaire de votre succès.
              Nos spécialistes, ultra-connectés et à l'affût des tendances émergentes, vous transmettent les compétences nécessaires pour rester à la pointe de l'innovation et découvrir tous les secrets de la communication, d’aujourd’hui et de demain.
            </h1>
            <ul className="font-bold text-left mt-4 list-disc ml-4 lg:ml-16">
              <li>Formations en ligne et en présentiel</li>
              <li>Du niveau débutant à expert</li>
              <li>Certifications officielles</li>
              <li>Consultations personnalisées</li>
            </ul> 
          </div>
        </div> 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="rounded-xl relative group cursor-pointer overflow-hidden duration-500 w-full h-80 shadow shadow-xl text-black font-bold p-5">
            <div className="rounded-xl group-hover:scale-110 w-full h-60 bg-black duration-500 mb-6">
              <img src={image2} className="h-60 rounded-xl" alt="a" />
            </div>
            <span className="justify-center flex mb-6">Stratégie Digitale</span>
          </div>

          <div className="rounded-xl relative group cursor-pointer overflow-hidden duration-500 w-full h-80 shadow shadow-xl text-black font-bold p-5">
            <div className="rounded-xl group-hover:scale-110 w-full h-60 bg-black duration-500 mb-6">
              <img src={image3} className="h-60 rounded-xl w-full" alt="a" />
            </div>
            <span className="justify-center flex mb-6">SEO et SEM</span>
          </div>

          <div className="rounded-xl relative group cursor-pointer overflow-hidden duration-500 w-full h-80 shadow shadow-xl text-black font-bold p-5">
            <div className="rounded-xl group-hover:scale-110 w-full h-60 bg-black duration-500 mb-6">
              <img src={image4} className="h-60 rounded-xl w-full" alt="a" />
            </div>
            <span className="justify-center flex mb-6">Content Marketing</span>
          </div>

          <div className="rounded-xl relative group cursor-pointer overflow-hidden duration-500 w-full h-80 shadow shadow-xl text-black font-bold p-5">
            <div className="rounded-xl group-hover:scale-110 w-full h-60 bg-black duration-500 mb-6">
              <img src={image5} className="h-60 w-full rounded-xl" alt="a" />
            </div>
            <span className="justify-center flex mb-6">Social Media</span>
          </div>

          <div className="rounded-xl relative group cursor-pointer overflow-hidden duration-500 w-full h-80 shadow shadow-xl text-black font-bold p-5">
            <div className="rounded-xl group-hover:scale-110 w-full h-60 bg-black duration-500 mb-6">
              <img src={image6} className="h-60 w-full rounded-xl" alt="a" />
            </div>
            <span className="justify-center flex mb-6">Analytics</span>
          </div>

          <div className="rounded-xl relative group cursor-pointer overflow-hidden duration-500 w-full h-80 shadow shadow-xl text-black font-bold p-5">
            <div className="rounded-xl group-hover:scale-110 w-full h-60 bg-black duration-500 mb-6">
              <img src={image7} className="h-60 rounded-xl" alt="a" />
            </div>
            <span className="justify-center flex mb-6">UX/UI</span>
          </div>
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e
        </div>

        <div className="mx-auto flex mt-12 min-h-screen max-w-screen-sm items-center justify-center">
          <a href="#" className="hover:scale-105 codepen-button relative block text-white mx-auto cursor-pointer font-semibold rounded-2xl overflow-hidden p-0.5 isolation-auto">
            <span className="relative block px-5 py-2 text-xl bg-white text-black rounded-xl h-full">
              Savoir plus
            </span>
          </a>
        </div>    
      </div>
<<<<<<< HEAD
      <button className="bg-[#6A71B3] hover:bg-[#C7A2CB] text-white font-bold py-2 px-4 rounded-xl text-xl mt-8 transition duration-300 transform hover:scale-105">
        Savoir plus
      </button>
    </div>
=======
    </>
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e
  );
};

export default Media;
