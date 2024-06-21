import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import offers from '../../../images/offres.png';

const MiddleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className='pt-20' ref={ref}>
        <motion.div 
          className="flex flex-col items-center justify-center"
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
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
        </motion.div>
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <img src={offers} alt="png" className="max-w-full h-auto" />
        </motion.div>
      </div>
    </>
  );
}

export default MiddleSection;
