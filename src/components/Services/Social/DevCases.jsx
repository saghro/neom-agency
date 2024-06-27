import React from 'react';
import Cases from '../../cases';
import Image1 from '../../../assests/identite1.png';
import Image2 from '../../../assests/identi2.png';
import Image3 from '../../../assests/identi3.png';
import Image4 from '../../../assests/identi4.png';


const DevCases = () => {
  const colors = ['#A8D9E0', '#C7A2CB', '#6A71B3', '#B3A2D9'];
 
  return (
    <div>
      <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text text-center mt-6 mb-4 lg:mb-0">Realisation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Cases
          imageSrc={Image1}
          title="cartes de visite "
          text="Matérialisé la conception de cartes de visite de Neom Agency.."
          backgroundColor={colors[0]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases
          imageSrc={Image2}
          title=" AZ ENERGIES "
          text="Conception de dépliants publicitaires pour AZ ENERGIES"
          backgroundColor={colors[1]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases
          imageSrc={Image3}
          title=" BOCARO"
          text="Elaboration du catalogue de l'entreprise BOCARO"
          backgroundColor={colors[2]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
         <Cases
          imageSrc={Image4}
          title="ITS "
          text="Neom a pris en charge l'impression sur vêtements et matériels de l’entreprise ITS avec une expertise remarquable."
          backgroundColor={colors[3]}
        /> 
      </div>
      <div className="flex justify-center">
  <div className="h-14 lg:w-56 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5 flex items-center justify-center">
    <button className="text-xl text-[#6A71B3]">Voir plus</button>
  </div>
</div>


    </div>
  );
}
 
export default DevCases;