import React from 'react';
import { BsBoxArrowInRight } from "react-icons/bs";
 
const LinkCard = ({ title, links }) => {
    return (
      <div className="bg-[#6A71B3] -mt-45 text-white p-12 rounded-lg w-full max-w-7xl mx-auto font-poppins">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="flex items-center justify-between p-6 bg-[#6A71B3] rounded-full hover:bg-[#6A71B3] transition duration-300">
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
      { text: "Comment optimiser son site grâce à l'IA ?", url: "#" },
      { text: "Référencement organique ou payant : Quoi choisir ? ?", url: "#" },
      { text: "Mise à jour des algorithmes de Google 2024", url: "#" },
      { text: "6 Astuces pour booster la visibilité de votre site web  ", url: "#" }
    ];
 
    return (
      <div className="flex items-center justify-center py-8">
        <LinkCard title="Pour aller plus loin" links={links} />
      </div>
    );
  };
 
 
  export default PageCards;