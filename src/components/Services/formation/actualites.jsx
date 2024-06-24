import React from 'react';
import { BsBoxArrowInRight } from "react-icons/bs";
 
const LinkCard = ({ title, links }) => {
    return (
      <div className="bg-gradient-to-r from-[#C7A2CB] via-[#6A71B3] to-[#6A71B3] text-white p-12 rounded-lg w-full max-w-7xl mx-auto font-poppins">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="flex items-center justify-between p-6 rounded-full hover:bg-[#6e63e7] transition duration-300">
              <span>{link.text}</span>
              <BsBoxArrowInRight className="text-3xl mr-24" />
            </a>
          ))}
        </div>
      </div>
    );
  };
 
  const PageCards = () => {
    const links = [
      { text: "Pourquoi opter pour le Blended Learning ?", url: "#" },
      { text: "Webinaire gratuit en marketing digital et relation client", url: "#" },
      { text: "Comment se former dans le marketing digital ?", url: "#" },
      { text: "Quels sont les avantages d'Immersive Learning ?", url: "#" }
    ];
 
    return (
      <div className="flex items-center justify-center py-8">
        <LinkCard title="Actualités" links={links} />
      </div>
    );
  };
 
 
  export default PageCards;