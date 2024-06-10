import React from 'react';
import { SlLogin } from 'react-icons/sl';

const Actualites = () => {
  return (
    <div className="bg-[#7854F7] p-9 text-white mt-4 h-80">
      <h1 className="text-4xl font-bold text-center mb-6 mt-3 ">Actualités</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <SlLogin className="mr-2" />
            <a href="#" className="block hover:underline">
              Marketing d'influence : 3 stratégies pour réussir son projet en 2024
            </a>
          </div>
          <div className="flex items-center">
            <SlLogin className="mr-2"/>
            <a href="#" className="block hover:underline">
              Communauté en ligne et marques : quelles stratégies en 2024
            </a>
          </div>
        </div>
        <div className="space-y-4 sm:pl-4">
          <div className="flex items-center">
            <SlLogin className="mr-2" />
            <a href="#" className="block hover:underline">
              La place de l'IA dans la génération de contenu
            </a>
          </div>
          <div className="flex items-center">
            <SlLogin className="mr-2" />
            <a href="#" className="block hover:underline">
              L'influence des pratiques UGC sur les consommateurs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualites;
