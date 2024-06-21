// import React from 'react';
// import image from '../../../assests/identi.png'

// const Video = () => {
//   return (
//     <div className="flex items-center justify-start p-4">
//       <div className="flex-shrink-0 mr-4">
//         <img className="h-96 w-100" src={image} alt="Description de l'image" /> 
//       </div>
//       <div>
//         <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center">Nous créons les éléments visuels et messages qui capturent l’essence de votre entreprise, assurant une reconnaissance immédiate et une connexion pleine d’émotion avec votre public.</h1>
//         <ul className="list-disc text-left text-gray-600 mt-4">
//           <li>Création de votre logo, signature de votre marque</li>
//           <li>Elaboration de votre charte graphique</li>
//           <li>Création de vos supports de papeterie (cartes visites, papier en-tête)</li>
//           <li>Réalisation de goodies aux couleurs de votre marque</li>
//           <li>Conception du packaging de vos produits</li>
//           <li>Conception de votre photo de couverture pour vos réseaux</li>
//           <li>Rédaction de vos éléments de langage</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Video;
import React from 'react';
import identiImage from '../../../assests/manwork.png';
import identiImage1 from '../../../assests/graphics.png';
import identiImage2 from '../../../assests/cart.png';
import identiImage3 from '../../../assests/color.png';
import identiImage4 from '../../../assests/delivery.png';
import identiImage5 from '../../../assests/couverture.png';
import identiImage6 from '../../../assests/langage.png';

const CardSection = () => {
  const cardsData = [
    { id: 1, description: 'Création de votre logo, signature de votre marque ', image: identiImage, title: 'Logo' },
    { id: 2, description: 'Elaboration de votre charte graphique  ', image: identiImage1, title: 'Charte graphique' },
    { id: 3, description: 'Création de vos supports de papeterie (cartes visites, papier en-tête) ', image: identiImage2, title: 'Papeterie' },
    { id: 4, description: 'Réalisation de goodies aux couleurs de votre marque ', image: identiImage3, title: 'Goodies' },
    { id: 5, description: 'Conception du packaging de vos produits ', image: identiImage4, title: 'Packaging' },
    { id: 6, description: 'Conception de votre photo de couverture pour vos réseaux ', image: identiImage5, title: 'Photo de couverture' },
    { id: 7, description: 'Rédaction de vos éléments de langage  ', image: identiImage6, title: 'Langage' },
  ];

  return (
    <div className="container mx-auto px-3 py-4">
      <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center">Nous créons les éléments visuels et messages qui capturent.</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ml-16">
        {cardsData.map((card) => (
          <div key={card.id} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
