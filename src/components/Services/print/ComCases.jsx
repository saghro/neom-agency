import React from 'react';
import Cases from '../../Cases.jsx';
import Img1 from '../../../images/mjk.png';
import Img2 from '../../../images/caroussel1.png';
import Img3 from '../../../images/its.png';

const ComCases = () => {
  const colors = ['#A8D9E0', '#C7A2CB', '#6A71B3', '#B3A2D9'];

  return (
    <div>
        <h3 className="mb-4 text-5xl font-bold header-gradient text-center">Etude des cas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Cases 
          imageSrc={Img1}
          title="Communication : RMA "
          text=": Neom a conçu des flyers percutants et professionnels, en mettant l'accent sur des visuels attrayants et un message clair."
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Img2}
          title="Az finance"
          text="Neom a créé du contenu captivant pour les réseaux sociaux, en utilisant des stratégies innovantes et des visuels attrayants pour maximiser l'engagement."
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Img3}
          title="ITS matériaux"
          text="Neom a conçu un roll-up élégant et informatif, mettant en avant des visuels captivants et un message clair pour attirer l'attention des clients potentiels."
        />
       
      </div>
    </div>
  );
}

export default ComCases;

