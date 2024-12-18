import React from 'react';

const Cle = () => {
    return (
        <div className="mt-0">
            <h1 className="font-bold text-[#272D4E] text-5xl text-center">
                Chiffres <span className="text-[#6A71B3]">Clés</span>
            </h1>
            <div className="text-center">
                <section className="flex flex-wrap justify-center gap-4 mt-4">
                    <div className="card h-44 w-40 p-2 m-4 flex flex-col items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-80 hover:rotate-2 bg-white/5">
                        <p className="mt-6 text-[#6A71B3] text-3xl font-bold text-center">100%</p>
                        <p className="font-bold mt-6 text-center">de client satisfaits</p>
                    </div>
                    <div className="card h-44 w-40 p-2 m-4 flex flex-col items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-80 hover:rotate-2 bg-white/5">
                        <p className="mt-6 text-[#6A71B3] text-3xl font-bold text-center">300+</p>
                        <p className="font-bold mt-6 px-2 text-center">Références</p>
                    </div>
                    <div className="card h-44 w-40 p-2 m-4 flex flex-col items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-80 hover:rotate-2 bg-white/5">
                        <p className="mt-6 text-[#6A71B3] text-3xl font-bold text-center">884</p>
                        <p className="font-bold mt-6 px-2 text-center">Projets, réalisés</p>
                    </div>
                    <div className="card h-44 w-40 p-2 m-4 flex flex-col items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-80 hover:rotate-2 bg-white/5">
                        <p className="mt-6 text-[#6A71B3] text-3xl font-bold text-center">4.8</p>
                        <p className="font-bold mt-6 text-center">+15% de CA post-campagne</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cle;