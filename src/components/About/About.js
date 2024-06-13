import React from 'react';
import image from '../../images/acc2.jpeg';

const About = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
            <div className='text-center md:text-left mb-6 md:mb-9 md:ml-8'>
                <p className='font-bold mt-16 md:mt-8 md:ml-12 text-3xl md:text-4xl'>Souhaitez-vous intégrer </p>
                <p className='font-bold md:ml-12 mr-24 text-3xl md:text-4xl'> le monde de <span className='text-[#6A71B3]'>digital</span> ?</p>
                <p className='font-regular mt-8 md:ml-12 text-lg md:text-xl'>Cherchez-vous une solution parfaitement adaptée à </p>
                <p className='font-regular md:ml-12 text-lg md:text-xl'>vos besoins et vos exigences ? </p>
                <p className='font-regular md:ml-12 text-lg md:text-xl'>Quel que soit votre domaine d'activité, Neom vous </p>
                <p className='font-regular md:ml-12 text-lg md:text-xl'>accompagne tout au long de votre processus de </p>
                <p className='font-regular md:ml-12 text-lg md:text-xl'>transformation digitale, pour réussir vos projets dans </p>
                <p className='font-regular md:ml-12 text-lg md:text-xl'>les meilleures conditions possibles !</p>
                <p className='font-regular md:ml-12 text-lg md:text-xl'>Qu'attendez-vous pour nous rejoindre ?</p>
                <p className='font-regular md:ml-12 text-lg md:text-xl'>Demandez un devis dès aujourd'hui et profitez de nos services exceptionnels. </p>
                <button className='mx-auto md:ml-40 mt-6 px-6 bg-[#6A71B3] rounded-3xl py-3 text-white font-bold'>Demander un devis</button>
            </div>
            <div className='text-center md:hidden '>
                <img src={image} alt="aze" style={{ display: "block" }} />
            </div>
            <div className='text-center hidden md:block'>
                <img src={image} alt="aze" style={{ width: "600px", height: "25rem", marginTop: "-100px" }} />
            </div>
        </div>
    );
};

export default About;
