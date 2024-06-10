import React from 'react';

const MiddleSection = () => {
  return (
    <>
      <div className='pt-20'>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 leading-tight text-center px-4 md:px-16 pr-20 pl-20 ">
          Nous veillons à vous offrir des cours<br /> monde dominé par {' '}
            <span className="text-orange-600">
attrayants et interactifs adaptés au rythme
            </span>{' '}
            .  de chacun disponibles en ligne et peuvent être suivi à tout moment.{' '}
            <br className="hidden md:block" />
            Développer vos{' '}
            <span className="text-orange-600">
            connaissances
                            </span>{' '}
                            ainsi que vos compétences avec nos {' '}
            <br className="hidden md:block" />
            <span className="text-orange-600">formations exclusives.</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default MiddleSection;
