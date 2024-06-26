

import React from 'react';
import personPlaceholder from '../../../assests/isometric.png';  

const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${window.location.origin}/neom.pdf`;
        link.download = 'neom.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex bg-gradient-to-r from-[#A8D9E0] via-[#6A71B3] to-[#C7A2CB] flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins">
            <div className="max-w-xl mb-8 lg:mb-0 ml-6 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
                <h1 className="text-3xl lg:text-6xl font-bold mb-4 animate-left-to-right">Identité de marque</h1>
                <div className="flex flex-col lg:flex-row gap-3 mt-8">
                    <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                        <div className="h-14 w-full lg:w-64 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5">
                            <div className="flex h-full w-full items-center rounded-3xl justify-center bg-white">
                                <button className="text-1xl text-[#6A71B3]">Demander un devis</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                        <div className="h-14 w-full lg:w-64 rounded-3xl bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5">
                            <div className="flex h-full w-full items-center rounded-3xl justify-center bg-white">
                                <button
                                    className="text-xl text-[#6A71B3]"
                                    onClick={handleDownload}
                                >
                                    Télécharger Notre Plaquette
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="animate-right-to-left hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
                <img src={personPlaceholder} alt="Person holding a laptop" className="h-full object-cover" />
            </div>
        </div>
    );
};

export default Hero;