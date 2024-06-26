
import React from 'react';
import image from '../../../assests/identi.png';

const Video = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-start p-4">

    
      <div className="flex-shrink-0 lg:mr-4 mb-4 lg:mb-0">
        <img className="h-80 lg:h-96 w-full object-cover" src={image} alt="Description de l'image" />
      </div>

      <div className="lg:ml-4">
      <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text text-center">Sous les projecteurs</h1>

<div className='text-justify mr-16'>
        <p className="text-sm lg:text-base text-justify text-gray-500 dark:text-gray-400 mb-4 mt-6">
          Projetez votre entreprise vers une notoriété de haut rang grâce à notre approche intégrée qui combine une réflexion, créativité et technologie avancée. Chez Neom, nous vous façonnons une identité de marque unique et percutante qui résonne parfaitement avec votre audience.
        </p>

        <p className="text-sm lg:text-base text-justify text-gray-500 dark:text-gray-400">
          Nous créons les éléments visuels et messages qui capturent l’essence de votre entreprise, assurant une reconnaissance immédiate et une connexion pleine d’émotion avec votre public.
        </p></div>
      </div>

    </div>
  );
}

export default Video;