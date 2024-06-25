import React from 'react';
import { motion } from 'framer-motion';
import Cases from '../../Cases.jsx';
import Image from '../../../images/vv.png';
import Mobile from '../../../images/mob.png';

const DevCases = () => {
  const colors = ['#A8D9E0', '#C7A2CB', '#6A71B3', '#B3A2D9'];

  const leftAnimation = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  const rightAnimation = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <div>
        <h3 className="mb-4 text-5xl font-bold header-gradient text-center">Etude des cas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={leftAnimation}
        >
          <Cases 
            imageSrc={Mobile}
            title="Conception de l’application mobile RMA"
            text="Neom a concrétisé la conception de l’application mobile et le site web de RMA"
          />
        </motion.div>
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={rightAnimation}
        >
          <Cases 
            imageSrc={Image}
            title="Création de site web et d’application mobile pour ERKAN PARK"
            text="Neom a réalisé la création de sites web et d'applications mobiles pour ERKAN PARK."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default DevCases;
