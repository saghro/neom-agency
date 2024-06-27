import React from 'react';
import Cases from '../../Cases';
import { Link } from 'react-router-dom';
import Image1 from '../../../assests/marketing1.png';
import Image2 from '../../../assests/marketing2.png';

 
const MarkCases = () => {
  const colors = ['#A8D9E0', '#C7A2CB', '#6A71B3', '#B3A2D9'];
 
  return (
    <div>
      <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center">Etude des cas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Cases
          imageSrc={Image1}
          title="Tac box"
          text="Un audit approfondie, une étude Benchmarking, des stratégies de positionnement"
          backgroundColor={colors[0]}
        />
        <div className="block md:hidden border-b-2 border-gray-300 my-4 mx-auto w-1/2"></div>
        <Cases
          imageSrc={Image2}
          title="RMA"
          text="Stratégie de lancement, stratégie de différenciation, marketing d'influence "
          backgroundColor={colors[1]}
        />
      </div>
      <div className="flex justify-center">
          <div className="h-14 lg:w-56 rounded-3xl p-0.5 flex items-center justify-center" style={{ border: '2px solid', borderImage: 'linear-gradient(to right, #6A71B3, #A8D9E0, #C7A2CB) 1' }}>
            <Link to="/realisation">
              <button className="text-xl transition-colors duration-300 hover:bg-gray-200" style={{ background: 'transparent', color: '#00008B' }}>Voir plus</button>
            </Link>
          </div>
        </div>
    </div>
  );
}
 
export default MarkCases;