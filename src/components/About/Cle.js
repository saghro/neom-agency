import React from 'react';

const Cle = () => {
    return (
        <div className="mt-24">
            <h1 className="font-bold text-[#272D4E] text-5xl text-center">
                Chiffres <span className="text-[#ff997f]">Clés</span>
            </h1>
            <div className="text-center">
                <section className="flex flex-wrap justify-center gap-16 mt-12">
                    <div className="card h-50 w-40 p-4 flex flex-col items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-125 hover:rotate-1 bg-white/5">
                        <p className="mt-6 text-[#ff997f] text-3xl font-bold text-center">N°1</p>
                        <p className="font-bold mt-6 text-center">En satisfaction client</p>
                    </div>
                    <div className="card h-50 w-40 p-4 flex flex-col items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-125 hover:rotate-1 bg-white/5">
                        <p className="mt-6 text-[#ff997f] text-3xl font-bold text-center">500+</p>
                        <p className="font-bold mt-6 px-2 text-center">Clients, anciens et actuels</p>
                    </div>
                    <div className="card h-50 w-40 p-4 flex flex-col items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-125 hover:rotate-1 bg-white/5">
                        <p className="mt-6 text-[#ff997f] text-3xl font-bold text-center">884</p>
                        <p className="font-bold mt-6 px-2 text-center">Projets, anciens et actuels</p>
                    </div>
                    <div className="card h-50 w-40 p-4 flex flex-col items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-125 hover:rotate-1 bg-white/5">
                        <p className="mt-6 text-[#ff997f] text-3xl font-bold text-center">4.8</p>
                        <p className="font-bold mt-6 text-center">Noté dans Trustpilot</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cle;
