import React from 'react';
import personPlaceholder from '../../images/10.png';

const Home = () => {
  
    return (
        <div
            className="flex flex-col lg:flex-row items-center justify-between p-8 h-screen text-white font-poppins bg-gradient-to-r from-[#A8D9E0] via-[#C7A2CB] to-[#6A71B3]"
        >
            <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
                <h1 className="text-4xl lg:text-4xl font-bold mb-4">Votre succès commence maintenant. </h1>
                <p className="text-lg lg:text-xl mb-8">
                    Depuis 2017, Neom Agenc révolutionne la communication digitale et print avec une équipe de 30 experts passionnés. Rejoignez-nous transformez vos idées en succés.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <div className="h-14 w-64 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5">
                        <div className="flex h-full w-full items-center rounded-3xl justify-center bg-[#6A71B3]">
                            <button className="text-1xl text-white">Racontez-nous votre projet</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
                <img src={personPlaceholder} alt="Person holding a laptop" className=""style={{ width:"500px" , height:"600px"  , marginTop:"-20px"}}  />
            </div>
        </div>
    );
};

export default Home;
