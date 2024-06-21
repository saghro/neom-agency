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
        <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
            <div className='text-center md:text-left mb-6 md:mb-9 md:ml-8'>
                <p className="font-bold mt-16 ml-12 text-5xl" style={{
                    background: 'linear-gradient(to right, #A8D9E0, #6A71B3 ,#A8D9E0)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>
                    Et si on révolutionnait
                </p>
                <p className="font-bold text-4xl ml-12 mb-4" style={{
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
                        className='text-[#6A71B3]  ml-1'
                    >
                          plaquette.
                    </a>
                </p>

                <div className='flex justify-center mt-6'>
                    <button className='px-6 bg-[#6A71B3] rounded-3xl py-3 text-white font-bold'>Demander un devis</button>
                </div>
                <div className='mt-6 text-center'></div>
            </div>
            <div className='text-center md:hidden '>
                <img src={image} alt="communication" style={{ display: "block" ,  }} />
            </div>
            <div className='text-center hidden md:block rounded-2xl'>
                <img src={image} alt="communication" style={{ width: "600px", height: "25rem", marginTop: "-100px" ,borderRadius:"1rem" }} />
            </div>
        </div>
    );
};

export default About;
