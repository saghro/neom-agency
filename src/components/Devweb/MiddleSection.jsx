import React from 'react';
import offers from '../../images/offres.png';

const MiddleSection = () => {
  return (
    <>
      <div className='pt-20'>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 leading-tight text-center px-4 md:px-16 pr-20 pl-20 ">
            Profitez de notre savoir-faire en matière de création<br />{' '}
            <span className="text-orange-600">
              des sites web et applications mobiles
            </span>{' '}
            sur mesure destiné pour{' '}
            <br className="hidden md:block" />
            maximiser votre{' '}
            <span className="text-orange-600">
              visibilité en ligne et optimiser vos
            </span>{' '}
            <br className="hidden md:block" />
            <span className="text-orange-600">conversions.</span>
          </h2>
        </div>
        <div className="flex justify-center mt-8">
          <img src={offers} alt="png" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
}

export default MiddleSection;
