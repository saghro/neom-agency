import React from "react";
import { IoIosGitMerge } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";

const Cards = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mt-9">
            <div className="flex flex-col items-center p-6 border border-gray-200 cursor-pointer shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 w-72">
                <FaCloud className="text-5xl text-[#C7A2CB]" />
                <h2 className="text-xl font-bold text-center mt-9">Formations en ligne et présentiel</h2>
                <p className="text-center mt-3">
                    Autonomiser votre équipe, stimuler l'innovation et garantir une adaptation rapide aux évolutions
                    constantes du paysage digital
                </p>
            </div>
            <div className="flex flex-col items-center p-6 border border-gray-200 cursor-pointer shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 w-72">
                <MdDesktopMac className="text-5xl text-[#6A71B3]" />
                <h2 className="text-xl font-bold text-center mt-9">Certifications officielles</h2>
                <p className="text-center mt-3">
                    Renforcer la capacité à fournir des solutions innovantes et à haute performance,
                    fournir des résultats exceptionnels à vos clients.
                </p>
            </div>
            <div className="flex flex-col items-center p-6 border border-gray-200 cursor-pointer shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 w-72">
                <IoIosGitMerge className="text-5xl text-[#A8D9E0]" />
                <h2 className="text-xl font-bold text-center mt-9">Consultations personnalisées</h2>
                <p className="text-center mt-3">
                    Des formations personnalisées répondant parfaitement à vos besoins grâce à une
                    attention individuelle et des conseils pratiques.
                </p>
            </div>
        </div>
    );
}

export default Cards;