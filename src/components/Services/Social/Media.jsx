// import React from 'react';
// import { FaUsers } from "react-icons/fa6";
// import { BiSolidLike } from "react-icons/bi";
// import { FaUserCircle } from "react-icons/fa";

// const Media = () => {
//   return (
//     <div className="flex flex-col justify-center items-center px-8 mt-8 ">
//       <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center">
//       Nous créons les éléments visuels et messages qui capturent l’essence de votre entreprise, assurant une reconnaissance immédiate et une connexion pleine d’émotion avec votre public.        </h1>
      
//       <div className="flex flex-col md:flex-row justify-around w-full mt-9 space-y-6 md:space-y-0 md:space-x-4">
//         <div className="flex bg- flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
//           <FaUsers className="text-5xl text-[#C7A2CB]"/>
//           <h2 className="text-xl font-bold mt-9">Création de contenu ciblé</h2>
//           <p className='text-center mt-9'>Création de votre logo, signature de votre marque </p>
//         </div>
//         <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
//           <BiSolidLike className="text-5xl text-[#C7A2CB]" />
//           <h2 className="text-xl font-bold mt-9">Optimisation des KPIs</h2>
//           <p className='text-center mt-9'>Elaboration de votre charte graphique  </p>
//         </div>
//         <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
//           <FaUserCircle className="text-5xl text-[#C7A2CB]" />
//           <h2 className="text-xl font-bold mt-9">Des stratégies sur mesure</h2>
//           <p className='text-center mt-9'>Création de vos supports de papeterie (cartes visites, papier en-tête)  </p>
//         </div>
//         <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
//           <FaUserCircle className="text-5xl text-[#C7A2CB]" />
//           <h2 className="text-xl font-bold mt-9">Des stratégies sur mesure</h2>
//           <p className='text-center mt-9'>Réalisation de goodies aux couleurs de votre marque </p>
//         </div>
//         <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
//           <FaUserCircle className="text-5xl text-[#C7A2CB]" />
//           <h2 className="text-xl font-bold mt-9">Des stratégies sur mesure</h2>
//           <p className='text-center mt-9'>Conception du packaging de vos produits  </p>
//         </div>
//         <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
//           <FaUserCircle className="text-5xl text-[#C7A2CB]" />
//           <h2 className="text-xl font-bold mt-9">Des stratégies sur mesure</h2>
//           <p className='text-center mt-9'>Conception de votre photo de couverture pour vos réseaux   </p>
//         </div>
//         <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
//           <FaUserCircle className="text-5xl text-[#C7A2CB]" />
//           <h2 className="text-xl font-bold mt-9">Des stratégies sur mesure</h2>
//           <p className='text-center mt-9'>Rédaction de vos éléments de langage   </p>
//         </div>
//       </div>
//       <div class="h-12 mt-6 cursor-pointer hover:scale-105 w-40 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5">
//                         <div class="flex h-full w-full items-center rounded-3xl justify-center bg-white ">
//                             <h1 class="text-1xl text-black">Savoir plus</h1>
//                         </div>
//     </div>
//     </div>
//   );
// };

// export default Media;

import React from 'react';
import image from '../../../assests/identi.png';

const Video = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-start p-4">

      {/* Image Section */}
      <div className="flex-shrink-0 lg:mr-4 mb-4 lg:mb-0">
        <img className="h-80 lg:h-96 w-full object-cover" src={image} alt="Description de l'image" />
      </div>

      {/* Text Section */}
      <div className="lg:ml-4">
      <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text text-center">Sous les projecteurs</h1>


        <p className="text-sm lg:text-base text-justify text-gray-500 dark:text-gray-400 mb-4 mt-6">
          Projetez votre entreprise vers une notoriété de haut rang grâce à notre approche intégrée qui combine une réflexion, créativité et technologie avancée. Chez Neom, nous vous façonnons une identité de marque unique et percutante qui résonne parfaitement avec votre audience.
        </p>

        <p className="text-sm lg:text-base text-justify text-gray-500 dark:text-gray-400">
          Nous créons les éléments visuels et messages qui capturent l’essence de votre entreprise, assurant une reconnaissance immédiate et une connexion pleine d’émotion avec votre public.
        </p>
      </div>

    </div>
  );
}

export default Video;