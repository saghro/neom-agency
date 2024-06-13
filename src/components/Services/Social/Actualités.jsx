import React from 'react';
import { BsBoxArrowInRight } from "react-icons/bs";
 
const LinkCard = ({ title, links }) => {
    return (
      <div className="bg-[#C7A2CB] text-white p-12 rounded-lg w-full max-w-7xl mx-auto font-poppins">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="flex items-center justify-between p-6 bg-[#C7A2CB] rounded-full hover:bg-[#C7A2CB] transition duration-300">
              <span>{link.text}</span>
              <BsBoxArrowInRight className="ml-4 text-3xl" />
            </a>
          ))}
        </div>
      </div>
    );
  };
 
  const PageCards = () => {
    const links = [
      { text: "Marketing d'influence : 3 stratégies pour réussir son projet en 2024", url: "#" },
      { text: "Communauté en ligne et marques : quelles stratégies en 2024", url: "#" },
      { text: "La place de l'IA dans la génération de contenu", url: "#" },
      { text: "L'influence des pratiques UGC sur les consommateurs", url: "#" }
    ];
 
    return (
      <div className="flex items-center justify-center py-8">
        <LinkCard title="Actualités" links={links} />
      </div>
    );
  };
 
 
  export default PageCards;