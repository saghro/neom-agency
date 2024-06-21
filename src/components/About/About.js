import React from 'react';
import image from '../../images/aboutn.jpg';

const About = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${window.location.origin}/neom.pdf`;
        link.download = 'neom.pdf';
        document.body.appendChild(link); 
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='flex flex-col md:flex-row justify-between items-center mb-6 px-4 md:px-8'>
            <div className='text-center md:text-left mb-6 md:mb-9'>
                <p className="font-bold mt-16 md:ml-12 text-3xl md:text-5xl" style={{
                    background: 'linear-gradient(to right, #A8D9E0, #6A71B3 ,#A8D9E0)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>
                    Et si on révolutionnait
                </p>
                <p className="font-bold text-2xl md:text-4xl md:ml-12 mb-4" style={{
                    background: 'linear-gradient(to right, #6A71B3,#A8D9E0, #A8D9E0 )',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>
                    communication ?
                </p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'>Chez NEOM, nous nous démarquons par notre maîtrise du SEO,</p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'>des réseaux sociaux et de la publicité en ligne, offrant des solutions sur mesure. </p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'>Notre ambition est de continuer à révolutionner la communication </p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'> digitale, en restant toujours à l'avant-garde des technologies </p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'> et des tendances du marché. Et, pour ceux qui ne sont pas  </p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'> « connectés »,notre pôle « Print », composé de designers-</p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'>maquettistes et de rédacteurs confirmés vous accompagne dans </p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'>la réalisation d'outils de communication concrets : catalogues,</p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'> flyers, goodies, roll-up.</p>
                <p className='font-regular mt-1 md:ml-12 text-xs md:text-xl'> Pour plus d'informations, téléchargez notre
                    <a 
                        href="#"
                        onClick={handleDownload}
                        className='text-[#6A71B3] ml-1'
                    >
                          plaquette.
                    </a>
                </p>

                <div className='flex justify-center md:justify-start mt-6 ml-9'>
                    <button className='px-6 bg-[#6A71B3] rounded-3xl py-3 text-white font-bold'>Demander un devis</button>
                </div>
            </div>
            <div className='w-full md:w-auto md:flex-shrink-0'>
                <img src={image} alt="communication" className='w-full h-auto md:w-96 md:h-96 md:rounded-2xl object-cover' />
            </div>
        </div>
    );
};

export default About;
