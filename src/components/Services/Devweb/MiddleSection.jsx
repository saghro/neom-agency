import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import offers from '../../../images/4412009.jpg';

const MiddleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className='pt-4 flex flex-col md:flex-row items-center' ref={ref}>
        <motion.div 
          className="flex justify-center md:w-1/2 pl-4 pr-4"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <img src={offers} alt="Web development offerings" className="max-w-[90%] h-auto rounded-lg" />
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center md:w-1/2 mt-8 md:mt-0 px-4 md:px-16"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 leading-tight text-center md:text-left mb-4">
          Vos outils, clés en main, disponibles sur tous les supports!
          </h2>
          
          <p className="text-md md:text-lg font-medium text-indigo-900 leading-tight text-center md:text-left">
            Chez <span className="text-[#C7A2CB]">Neom Agency</span>, nous plaçons le digital au cœur de l'interaction et de l'innovation, en développant vos sites web et applications mobiles pour optimiser votre image de marques et vos services.
          </p>
          <p className="text-md md:text-lg font-medium text-indigo-900 leading-tight text-center md:text-left mt-4">
            Notre expertise réside dans la création de sites web et d'applications mobiles de dernière génération, offrant un design intuitif, des performances optimisées et des fonctionnalités avancées.
          </p>
          <p className="text-md md:text-lg font-medium text-indigo-900 leading-tight text-center md:text-left mt-4">
            Grâce à notre savoir-faire dans le domaine des technologies de pointe telles que le développement réactif, les Progressive Web Apps (PWA) et l'intégration d'intelligence artificielle, nous concevons des solutions sur mesure répondant parfaitement aux besoins spécifiques de votre entreprise, ainsi de vos utilisateurs.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default MiddleSection;