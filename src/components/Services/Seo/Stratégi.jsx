// import React from 'react';

// const MiddleSection = () => {
//   return (
//     <>
//       <div className='pt-20 '>
//         <div className="flex flex-col items-center justify-center">
//           <h2 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center ">
//           Dans un environnement compétitif où chaque clic peut <br />{' '}
//             <span className="bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center  ">
//             faire la différence
//             </span>{' '}
//             , il est important de se démarquer de la concurrence à travers des{' '}
//             <br className="hidden md:block" />
            
//             <span className="bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center ">
//             stratégies SEO/SEA.
//             </span>{' '}
//             <br className="hidden md:block" />
//           </h2>
//         </div>
        
//       </div>
//     </>
//   );
// }

// export default MiddleSection;

import React from 'react';
import image from '../../../assests/marketing-ideas.png'

const Video = () => {
  return (
    <div className="flex items-center justify-start p-4">
      <div className="flex-shrink-0 mr-4">
        <img className="h-96 w-100 mt-8" src={image} alt="Description de l'image" /> 
      </div>
      <div>
      <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center">Nous créons les éléments visuels et messages qui capturent.</h1>

        <p className="text-justify text-gray-500 dark:text-gray-400 mt-6 text-center"> Accompagnement marketing  
        <p className='text-justify text-gray-500 dark:text-gray-400 text-center'>Étude de marché </p>

       <p className='text-justify text-gray-500 dark:text-gray-400 '>Stratégie médias sociaux  </p></p>
        <p className='text-justify text-gray-500 dark:text-gray-400 '>Plan d’action marketing </p>
        <p className='text-justify text-gray-500 dark:text-gray-400'>Stratégie numérique </p>
        <p className='text-justify text-gray-500 dark:text-gray-400'>Veille concurrentielle  </p>

      </div>
    </div>
  );
}

export default Video;