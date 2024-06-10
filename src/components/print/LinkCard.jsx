import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const LinkCard = ({ title, links }) => {
  return (
    <div className="bg-pink-500 text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="flex items-center justify-between p-4 ">
            <span>{link.text}</span>
            <FaArrowRight />
          </a>
        ))}
      </div>
    </div>
  );
};

const PageCards = () => {
    const links = [
      { text: "Les salons de l'imprimerie et des arts graphiques 2024", url: "#" },
      { text: "Comment lancer une compagne créative réussie ?", url: "#" },
      { text: "La place de la communication papier en E-commerce", url: "#" },
      { text: "Les meilleures compagnes print en 2024", url: "#" }
    ];
  
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <LinkCard title="Pour aller plus loin" links={links} />
      </div>
    );
  };
  
  export default PageCards;