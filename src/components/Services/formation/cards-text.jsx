import React from "react";
import { IoIosGitMerge } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";
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
    <>
<div className="flex flex-col justify-center items-center px-8 mt-6 -mb-44">
    <div className="flex">
    <motion.img 
          src={image1} 
          className="shadow-2xl ml-6 w-full h-96 rounded-xl"
          alt="a"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />      
    <div className="animate-right-to-left">
      <h1 className="align-center ml-6 mt-6 text-md text-left font-regular font-Rammetto-One">
            Dans un monde où le digital évolue à une vitesse fulgurante, NEOM vous aide à préparer vos équipes aux défis de demain. 

      En vous offrant des sessions de formation interactives, engageantes et attrayantes, qui s'appuient sur les dernières avancées technologiques à l’instar de la réalité virtuelle et l'intelligence artificielle, Neom Agency est assurément le partenaire de votre succès. 

      Nos spécialistes, ultra-connectés et à l'affût des tendances émergentes, vous transmettent les compétences nécessaires pour rester à la pointe de l'innovation et découvrir tous les secrets de la communication, d’aujourd’hui et de demain.      
      </h1>
      <ul className="font-bold text-left ml-16 mt-4 list-disc ">
      <li>Formations en ligne et en présentiel</li>
      <li>Du niveau débutant à expert</li>
      <li>Certifications officielles</li>
      <li>Consultations personnalisées</li>
</ul> 
</div>
</div> 

<div className="flex space-between grid grid-cols-3 gap-8">
    <div
  className="mt-12 rounded-xl relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 shadow shadow-xl text-black font-bold p-5"
>
  <div className="">
  <div
      class="rounded-xl group-hover:scale-110 mt-2 w-full h-60 bg-black duration-500 mb-6"
    ><img src={image2} className="h-60 rounded-xl -mt-3" alt="a" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
    </div>
  </div>
  <span className="justify-center flex mb-6">Stratégie Digitale</span>
</div>

<div
  className="mt-12 rounded-xl relative group cursor-pointer overflow-hidden  duration-500 w-64 h-80 shadow shadow-xl text-black font-bold p-5"
>
  <div className="">
  <div
      class="rounded-xl group-hover:scale-110 mt-2 w-full h-60 bg-black duration-500 mb-6"
    ><img src={image3} className="h-60 rounded-xl -mt-3 w-96  " alt="a" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
    </div>
  </div>
  <span className="justify-center flex mb-6">SEO et SEM</span>
</div>

<div
  className="mt-12 rounded-xl relative group cursor-pointer overflow-hidden  duration-500 w-64 h-80 shadow shadow-xl text-black font-bold p-5"
>
  <div className="">
  <div
      class="rounded-xl group-hover:scale-110 mt-2 w-full h-60 bg-black duration-500 mb-6"
    ><img src={image4} className="h-60 rounded-xl w-96 -mt-3" alt="a" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
    </div>
  </div>
  <span className="justify-center flex mb-6">Content Marketing</span>
</div>

<div
  className="mt-12 rounded-xl relative group cursor-pointer overflow-hidden  duration-500 w-64 h-80 shadow shadow-xl text-black font-bold p-5"
>
  <div className="">
  <div
      class="rounded-xl group-hover:scale-110 mt-2 w-full h-60 bg-black duration-500 mb-6"
    ><img src={image5} className="h-60 w-96 rounded-xl -mt-3" alt="a" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
    </div>
  </div>
  <span className="justify-center flex mb-6">Social Media</span>
</div>

<div
  className="mt-12 rounded-xl relative group cursor-pointer overflow-hidden  duration-500 w-64 h-80 shadow shadow-xl text-black font-bold p-5"
>
  <div className="">
  <div
      class="rounded-xl group-hover:scale-110 mt-2 w-full h-60 bg-black duration-500 mb-6"
    ><img src={image6} className="h-60 w-96 rounded-xl -mt-3" alt="a" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
    </div>
  </div>
  <span className="justify-center flex mb-6">Analytics</span>
</div>

  <div
    className="mt-12 rounded-xl relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 shadow shadow-xl text-black font-bold p-5"
  >
    <div className="">
    <div
        class="rounded-xl group-hover:scale-110 mt-2 w-full h-60 bg-black duration-500 mb-6"
      ><img src={image7} className="h-60 rounded-xl -mt-3" alt="a" /></div>
      <div
        class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
      >
      </div>
    </div>
    <span className="justify-center flex mb-6">UX/UI</span>
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