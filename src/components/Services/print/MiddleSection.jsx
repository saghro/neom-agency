import React from 'react';
import MiddleImage from '../../../images/neomcard.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MiddleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className='pt-20 flex flex-col-reverse md:flex-row items-center' ref={ref}>
        <motion.div 
          className="flex justify-center w-full md:w-1/2 pl-4 pr-4"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <img src={MiddleImage} alt="Communication Strategy" className="max-w-[90%] h-auto" />
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center w-full md:w-1/2 mt-8 md:mt-0 px-4 md:px-16"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 leading-tight text-center md:text-left mb-4">
          Engagez, inspirez, fidélisez
            </h2>
          <p className="text-md md:text-lg font-medium text-indigo-900 leading-tight text-center md:text-left">
            Bénéficiez d’une stratégie de communication adaptée à vos besoins, basée sur des analyses précises et une compréhension approfondie de votre marché. Grâce à nos experts de la communication et leurs idées novatrices, nous vous positionnons en tête de la concurrence tout en consolidant votre position de leader. Ensemble, nous élaborons une feuille de route qui oriente chaque action vers un succès mesurable.
          </p>
          <p className="text-md md:text-lg font-medium text-indigo-900 leading-tight text-center md:text-left mt-4">
            Parce que Neom Agency c’est ça, du concret !
          </p>
          <p className="text-md md:text-lg font-medium text-indigo-900 leading-tight text-center md:text-left mt-4">
            Nos équipes sont divisées en différents pôles afin de tous exceller dans leur domaine, qu’il s’agisse du web, du print, de l’éditorial ou encore du développement web.
          </p>
        </motion.div>

      </div>
    </>
  );
}

export default MiddleSection;
