import React from 'react';

const MiddleSection = () => {
  return (
    <>
      <div className='pt-20'>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 leading-tight text-center px-4 md:px-16 pr-20 pl-20 ">
          Dans un environnement compétitif où chaque clic peut <br />{' '}
            <span className="text-[#F19F00]">
            faire la différence
            </span>{' '}
            , il est important de se démarquer de la concurrence à travers des{' '}
            <br className="hidden md:block" />
            maximiser votre{' '}
            <span className="text-[#F19F00]">
            stratégies SEO/SEA.
            </span>{' '}
            <br className="hidden md:block" />
          </h2>
        </div>
        
      </div>
    </>
  );
}

export default MiddleSection;