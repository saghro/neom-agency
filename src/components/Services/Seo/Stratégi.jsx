

// import React from 'react';
// import image from '../../../assests/mobile-marketing-isometric-style.png';

// const Video = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-start p-4">
//       <div className="flex-shrink-0 mr-4 lg:mr-8 mb-6 lg:mb-0">
//         <img className="h-48 w-full sm:h-64 md:h-80 lg:h-96 object-cover" src={image} alt="Description de l'image" />
//       </div>
//       <div className='text-center text-left lg:text-justify lg:mr-36'>       
//          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-4 lg:mt-8">
//         De la conception à l’optimisation
//         </h1>
//         <p className="text-justify text-gray-500 dark:text-gray-400 mt-4 lg:mt-6">
//           Avec un contenu harmonieux, un storytelling captivant et une stratégie de marketing cohérente, nous vous aidons à transformer vos visions en réalité tangible, en bâtissant une présence en ligne qui inspire confiance et fidélité, tout en construisant un avenir où votre marque prospère et se distingue et ce, grâce à notre maîtrise des plateformes émergentes.
//         </p>
//         <p className="text-justify text-gray-500 dark:text-gray-400 mt-4 lg:mt-6">
//           En combinant l’intelligence artificielle, big data et créativité, nous vous aidons à mettre en place des stratégies bien pensées, personnalisées qui vous distinguent et maximisent votre retour sur investissement...
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Video;


import React from 'react';
import { motion } from 'framer-motion';
import image from '../../../assests/mobile-marketing-isometric-style.png';

const Video = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-start p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-shrink-0 mr-4 lg:mr-8 mb-6 lg:mb-0">
        <motion.img
          src={image}
          alt="Description de l'image"
          className="h-48 w-full sm:h-64 md:h-80 lg:h-96 object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
      </div>
      <div className='text-center text-left lg:text-justify lg:mr-36'>       
         <motion.h1
           className="text-2xl md:text-3xl lg:text-4xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-4 lg:mt-8"
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.4, duration: 0.6 }}
         >
           De la conception à l’optimisation
         </motion.h1>
         <motion.p
           className="text-justify text-gray-500 dark:text-gray-400 mt-4 lg:mt-6"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6, duration: 0.6 }}
         >
           Avec un contenu harmonieux, un storytelling captivant et une stratégie de marketing cohérente, nous vous aidons à transformer vos visions en réalité tangible, en bâtissant une présence en ligne qui inspire confiance et fidélité, tout en construisant un avenir où votre marque prospère et se distingue et ce, grâce à notre maîtrise des plateformes émergentes.
         </motion.p>
         <motion.p
           className="text-justify text-gray-500 dark:text-gray-400 mt-4 lg:mt-6"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8, duration: 0.6 }}
         >
           En combinant l’intelligence artificielle, big data et créativité, nous vous aidons à mettre en place des stratégies bien pensées, personnalisées qui vous distinguent et maximisent votre retour sur investissement...
         </motion.p>
      </div>
    </motion.div>
  );
}

export default Video;
