import React from 'react';
import './cle.css';

const Cle = () => {
    return (
        <div className="main">
            <h1 className="font-bold text-[#272D4E] text-5xl text-center">
                Chiffres <span style={{ color: '#ff997f' }}>Clés</span>
            </h1>
            <div className="text-center">
                <section className="right-section flex">
                    <div className="card h-48 mt-12 mb-8 w-36">
                        <p className="mt-6 text-[#ff997f] text-3xl font-bold text-center">N°1</p>
                        <p className="font-bold mt-6">En satisfaction client</p>
                    </div>
                    <div className="card h-48 mt-12 mb-8 w-36">
                        <p className="mt-6 text-[#ff997f] text-3xl font-bold text-center">500+</p>
                        <p className="font-bold mt-6 px-2">Clients, anciens et actuels</p>
                    </div>
                    <div className="card h-48 mt-12 mb-8 w-36">
                        <p className="mt-6 text-[#ff997f] text-3xl font-bold text-center">884</p>
                        <p className="font-bold mt-6 px-2">Projets, anciens et actuels</p>
                    </div>
                    <div className="card h-48 mt-12 mb-8 w-36">
                        <p className="mt-6 text-[#ff997f] text-3xl font-bold text-center">4.8</p>
                        <p className="font-bold mt-6">Noté dans Trustpilot</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cle;
