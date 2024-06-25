import React from 'react';
import Cases from '../../cases';
import Image from '../../../assests/1.png';
import Image2 from '../../../assests/36-removebg-preview (1).png';
import Image3 from '../../../assests/37-removebg-preview (1).png';

const DevCases = () => {
  const colors = ['#A8D9E0', '#C7A2CB', '#6A71B3', '#B3A2D9'];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Our Development Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Cases
          title="Formations en ligne et en présentiel "
          text="Autonomiser votre équipe, stimuler l'innovation et garantir une adaptation rapide aux évolutions constantes du paysage digital"
          backgroundColor={colors[0]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Image2}
          title="Certifications officielles"
          text="Renforcer la capacité à fournir des solutions innovantes et à haute performance, fournir des résultats exceptionnels à vos clients"
          backgroundColor={colors[1]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases 
          imageSrc={Image3}
          title="Consultations personnalisées"
          text="Identifier les opportunités stratégiques et développer des recommandations adaptées à votre secteur d'activité à travers des échanges approfondis et des analyses détaillées"
          backgroundColor={colors[2]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
      </div>
    </div>
  );
}

export default DevCases;