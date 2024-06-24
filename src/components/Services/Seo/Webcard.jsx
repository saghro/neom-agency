import React from 'react';
import { RiBodyScanFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";

const WebCards = () => {
  const Cards = ({ title, description, icon }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white transform transition duration-300 hover:bg-gradient-to-r from-[#6A71B3] to-[#A8D9E0] hover:text-white flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-4 text-3xl sm:text-5xl">
            {icon}
          </div>
          <div className="font-bold text-xl sm:text-2xl mb-2">{title}</div>
          <p className="text-base sm:text-lg">
            {description}
          </p>
        </div>
         <div class="h-12 mt-6 cursor-pointer hover:scale-105 w-40 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5">
                        <div class="flex h-full w-full items-center rounded-3xl justify-center bg-white ">
                            <h1 class="text-1xl text-black">Savoir plus</h1>
                        </div>
    </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Cards
          title="Référencement SEO"
          description="Avec un contenu harmonieux, un storytelling captivant et une stratégie de marketing cohérente, nous vous aidons à transformer vos visions en réalité tangible, en bâtissant une présence en ligne qui inspire confiance et fidélité, tout en construisant un avenir où votre marque prospère et se distingue et ce, grâce à notre maîtrise des plateformes émergentes. "
          icon={<RiBodyScanFill />}
        />
        <Cards
          title="Référencement SEA"
          description="En combinant l’intelligence artificielle, big data et créativité, nous vous aidons à mettre en place des stratégies bien pensées, personnalisées qui vous distinguent et maximisent votre retour sur investissement... "
          icon={<IoEyeSharp />}
        />
      </div>
      <div class="h-12 mt-6 cursor-pointer hover:scale-105 w-60 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5">
                        <div class="flex h-full w-full items-center rounded-3xl justify-center bg-white ">
                            <h1 class="text-1xl text-black">Vous avez un projet?</h1>
                        </div>
    </div>
    </div>
  );
};

export default WebCards;