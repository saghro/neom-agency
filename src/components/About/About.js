import React from 'react';
import image from '../../images/acc2.jpeg'

const About = () => {

    return (
        <>
            <div className='flex justify-between mb-6'>

                <div className='text-left mb-6 ml-8'>
                    <p className='font-bold mt-16 ml-12 text-6xl'>Souhaitez-vous intégrer </p>
                    <p className='font-bold ml-12 mr-24 text-5xl'> le monde de <span className='text-[#ff997f]'>digital</span> ?</p>
                    <p className='font-regular mt-8 ml-12 text-xl'>Cherchez-vous une solution parfaitement adaptée à </p>
                    <p className='font-regular ml-12 text-xl'>vos besoins et vos exigences ? </p>
                    <p className='font-regular ml-12 text-xl'>Quel que soit votre domaine d'activité, Neom vous </p>
                    <p className='font-regular ml-12 text-xl'>accompagne tout au long de votre processus de </p>
                    <p className='font-regular ml-12 text-xl'>transformation digiale, pour réussir vos projets dans </p>
                    <p className='font-regular ml-12 text-xl'>les meilleurs conditions possibles !</p>
                    <p className='font-regular ml-12 text-xl'>Qu'attendez-vous pour nous rejoindre ?</p>
                    <p className='font-regular ml-12 text-xl'>Demandez un devis dés aujourd'hui et profitez de nos services exceptionnelles !! </p>
                    <button className='ml-80 mt-16 px-6 bg-[#ff997f] rounded-xl py-3 text-white font-bold'>Demander un devis</button>
                </div>

                <div> <img src={image} alt="aze" style={{width : "600px" , height : "600px"}} /></div>

            </div>


        </>
    )
}


export default About;