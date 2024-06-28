import React from 'react';
import { Link } from 'react-router-dom';
import Cases from '../../Cases.jsx';
import Img1 from '../../../images/mjk.png';
import Img2 from '../../../images/caroussel1.png';
import Img3 from '../../../images/its.png';

const ComCases = () => {
  const colors = ['#A8D9E0', '#C7A2CB', '#6A71B3', '#B3A2D9'];

  return (
    <div>
        <h3 className="mb-4 text-5xl font-bold text-center" style={{ background: 'linear-gradient(to right, #A8D9E0, #C7A2CB, #6A71B3)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Portfolio</h3>
      <div className="grid grid-cols-1">
        <Cases 
          imageSrc={Img1}
          title="Communication : RMA "
          text=": Neom a conçu des flyers percutants et professionnels, en mettant l'accent sur des visuels attrayants et un message clair."
        />
        <div className="border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Img2}
          title="Az finance"
          text="Neom a créé du contenu captivant pour les réseaux sociaux, en utilisant des stratégies innovantes et des visuels attrayants pour maximiser l'engagement."
        />
        <div className="border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Img3}
          title="ITS matériaux"
          text="Neom a conçu un roll-up élégant et informatif, mettant en avant des visuels captivants et un message clair pour attirer l'attention des clients potentiels."
        />
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

export default ComCases;
