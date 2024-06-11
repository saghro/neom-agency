


  import React from 'react';
import { BsBoxArrowInRight } from "react-icons/bs";

const LinkCard = ({ title, links }) => {
    return (
      <div className="bg-customRed text-white p-12 rounded-lg w-full max-w-7xl mx-auto font-poppins">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="flex items-center justify-between p-6 bg-customRed rounded-full hover:bg-customDeepRed transition duration-300">
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
      { text: "Pourquoi opter pour le Blended Learning ?", url: "#" },
      { text: "Webinaire gratuit en marketing digital et relation client", url: "#" },
      { text: "Comment se former dans le marketing digital ?", url: "#" },
      { text: "Quels sont les avantages d'Immersive Learning ?", url: "#" }
    ];
  
    return (
      <div className="flex items-center justify-center py-8">
        <LinkCard title="Pour aller plus loin" links={links} />
      </div>
    );
  };
  
  
  export default PageCards;