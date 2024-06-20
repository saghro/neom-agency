import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col items-center mb-6'>
            <div className='text-center'>
                <p className="font-bold mt-16 text-4xl" style={{
                    background: 'linear-gradient(to right, #A8D9E0, #6A71B3 ,#A8D9E0)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>
                    Et si on révolutionnait
                </p>
                <p className="font-bold text-4xl" style={{
                    background: 'linear-gradient(to right, #6A71B3,#A8D9E0, #A8D9E0 )',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>
                    communication ?
                </p>

                <p className='font-regular text-lg md:text-xl text-center mt-8'>
                    Chez NEOM, nous nous démarquons par notre maîtrise du SEO,<br></br>
                     des réseaux sociaux et de la publicité en ligne,offrant des solutions sur mesure.<br></br>  Notre ambition est de continuer à révolutionner la communication digitale,<br></br>  en restant toujours à l'avant-garde des technologies et des tendances du marché.<br></br> 
                    Et, pour ceux qui ne sont pas « connectés », notre pôle «
                    Print »,<br></br>composé de designers-maquettistes et de rédacteurs confirmés,<br></br>  vous accompagne dans la réalisation d'outils de communication concrets :<br></br> 
                    catalogues, flyers, goodies, roll-up...
                </p>
                <button className='mx-auto mt-6 px-6 bg-[#6A71B3] rounded-3xl py-3 text-white font-bold'>Demander un devis</button>
            </div>
        </div>
    );
};

export default About;