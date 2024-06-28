import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
        <h3 className="mb-4 text-5xl font-bold text-center" style={{ background: 'linear-gradient(to right, #A8D9E0, #C7A2CB, #6A71B3)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
        Realisation</h3>
      <div className="grid grid-cols-1">
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
        <div className="border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
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
        <div className="border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <div className="flex justify-center">
          <div className="h-14 lg:w-56 rounded-3xl p-0.5 flex items-center justify-center" style={{ border: '2px solid', borderImage: 'linear-gradient(to right, #6A71B3, #A8D9E0, #C7A2CB) 1' }}>
            <Link to="/realisation">
              <button className="text-xl transition-colors duration-300 hover:bg-gray-200" style={{ background: 'transparent', color: '#00008B' }}>Voir plus</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevCases;
