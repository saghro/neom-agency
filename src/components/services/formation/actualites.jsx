import React from 'react';
import { SlLogin } from 'react-icons/sl';

const Actualites = () => {
  return (
    <div className="bg-[#7854F7] p-9 h-auto text-white mt-4 mb-16">
      <h1 className="text-4xl font-bold text-center mb-6 mt-4">Actualités</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <SlLogin className="mr-2" />
            <a href="#" className="block hover:underline">
              Pourquoi opter pour le Blended Learning ?
            </a>
          </div>
          <div className="flex items-center">
            <SlLogin className="mr-2"/>
            <a href="#" className="block hover:underline">
              Webinaire gratuit en marketing digital et relation client
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <SlLogin className="mr-2" />
            <a href="#" className="block hover:underline">
              Comment se former dans le marketing digital ?
            </a>
          </div>
          <div className="flex items-center">
            <SlLogin className="mr-2" />
            <a href="#" className="block hover:underline">
              Quels sont les advantages d'Immersive Learning ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualites;
