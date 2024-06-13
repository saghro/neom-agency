import React from 'react';

const MiddleSection = () => {
  return (
    <>
      <div className='pt-20'>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 leading-tight text-center px-4 md:px-16 pr-20 pl-20 ">
          Nous croyons au pouvoir du support physique dans un<br /> monde dominé par {' '}
            <span className="text-[#C7A2CB]">
              le numérique
            </span>{' '}
            . C'est pourquoi nous vous{' '}
            <br className="hidden md:block" />
            proposons les{' '}
            <span className="text-[#C7A2CB]">
            meilleurs services en matière 
                </span>{' '}
            <br className="hidden md:block" />
            <span className="text-[#C7A2CB]">d’impression.</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default MiddleSection;
