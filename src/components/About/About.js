import React from 'react';
import image from '../../images/aboutn.png';

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
            <div className='text-center md:text-left mb-6 md:mb-9 w-full md:w-[500px]'>
                <p className="font-bold mt-16 md:ml-12 text-3xl md:text-3xl mb-6" style={{
                    background: 'linear-gradient(to right, #A8D9E0, #6A71B3 ,#A8D9E0)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>
                    Et si on révolutionnait communication ?
                </p>
                <div className='font-regular mt-1 md:ml-12 text-xs md:text-lg w-[600px]' style={{
                    textAlign: 'justify',
                    textJustify: 'inter-word'
                }}>
                    <p>Chez NEOM, nous nous démarquons par notre maîtrise du SEO, des réseaux sociaux et de la publicité en ligne, offrant des solutions sur mesure. Notre ambition est de continuer à révolutionner la communication digitale, en restant toujours à l'avant-garde des technologies et des tendances du marché. Et, pour ceux qui ne sont pas « connectés », notre pôle « Print », composé de designers-maquettistes et de rédacteurs confirmés vous accompagne dans la réalisation d'outils de communication concrets : catalogues, flyers, goodies, roll-up.</p>
                    <p className='mt-2'>Pour plus d'informations, téléchargez notre
                        <a 
                            href="#"
                            onClick={handleDownload}
                            className='text-[#6A71B3] ml-1'
                        >
                            plaquette.
                        </a>
                    </p>
                </div>

                <div className='flex justify-center md:justify-start mt-6 md:ml-12'>
                    <button className='px-6 bg-[#6A71B3] rounded-3xl py-3 text-white font-bold'>Demander un devis</button>
                </div>
            </div>
            <div className='w-full md:w-[500px]'>
                <img src={image} alt="communication" className='w-full md:w-[500px] md:h-auto md:rounded-2xl object-cover' />
            </div>
        </div>
    );
};

export default About;