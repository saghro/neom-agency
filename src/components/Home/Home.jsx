import React from 'react';
import background from '../../images/hero.png';
import personPlaceholder from '../../images/hero1.png';
const Home = () => {
    return (
        <div
            className=" flex flex-col lg:flex-row items-center justify-between- p-8 bg-cover bg-center h-screen text-white font-poppins"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto " style={{ marginTop: '17vh' }}>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Your First Choice</h1>
                <p className="text-lg lg:text-xl mb-8">
                    Optimisez votre performance en ligne avec nos Stratégies, pour transformer votre vision en
                    réalité.Nous sommes prêts à nous mettre à votre disposition
                    notre expertise pour un projet réussi.
                </p>
                <button className="bg-white text-blue-900 px-4 py- p-4 w-56 rounded-full font-bold ml-30 mt-10">Contact Us</button>
            </div>



            <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
                <img src={personPlaceholder} alt="Person holding a laptop" className="h-full object-cover" />
            </div>
        </div>


    );
};

export default Home;
