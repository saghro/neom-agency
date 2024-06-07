import React from 'react';

const cardsData = [
  {
    icon: <span className="text-3xl">✏️</span>, // Using emoji for simplicity
    title: 'UI/UX design',
    description: "Un design attrayant et des visuels modernes et créatifs pour capter l'attention des visiteurs.",
  },
  {
    icon: <span className="text-3xl">💻</span>, 
    title: 'Développement web et mobile',
    description: "Après une analyse de l'ensemble de vos besoins, nous sélectionnons les outils les plus adaptés à vos objectifs.",
  },
  {
    icon: <span className="text-3xl">📑</span>,
    title: 'Maintenance des sites web et des applications',
    description: "Correction des bugs, mettre à jour de nouvelles fonctionnalités, et surveillance de la sécurité.",
  },
  {
    icon: <span className="text-3xl">ℹ️</span>,
    title: 'Déploiement',
    description: "Déployer un site web par métier, par zone géographique, ou sur l'ensemble du système.",
  },
];

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:bg-orange-400 transform transition duration-300 ease-in-out">
      <div className="flex justify-center mb-4 text-4xl text-gray-800">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="bg-orange-400 hover:border-2 hover:border-white text-white font-medium py-2 px-4 rounded-full mt-4">
        Savoir Plus
      </button>
    </div>
  );
};

const WebCards = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-orange-400 hover:border-2 hover:border-white text-white font-medium py-2 px-6 rounded-full">
          Vous avez un Projet?
        </button>
      </div>
    </div>
  );
};

export default WebCards;