import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import offers from '../../../images/webdev.jpg';

const MiddleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
<<<<<<< HEAD
      <div className='pt-20'>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 leading-tight text-center px-4 md:px-16 pr-20 pl-20 ">
            Profitez de notre savoir-faire en matière de création<br />{' '}
            <span className="text-[#C7A2CB]">
              des sites web et applications mobiles
            </span>{' '}
            sur mesure destiné pour{' '}
            <br className="hidden md:block" />
            maximiser votre{' '}
            <span className="text-[#C7A2CB]">
              visibilité en ligne et optimiser vos
            </span>{' '}
            <br className="hidden md:block" />
            <span className="text-[#C7A2CB]">conversions.</span>
          </h2>
        </div>
        <div className="flex justify-center mt-8">
          <img src={offers} alt="png" className="max-w-full h-auto" />
        </div>
=======
      <div className='pt-20 flex flex-col-reverse md:flex-row items-center' ref={ref}>
        <motion.div 
          className="flex flex-col justify-center md:w-1/2 mt-8 md:mt-0 px-4 md:px-16"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
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
        <motion.div 
          className="flex justify-center md:w-1/2 pl-4 pr-4"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <img src={offers} alt="Web development offerings" className="max-w-[90%] h-auto" />
        </motion.div>
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e
      </div>
    </>
  );
}

export default MiddleSection;