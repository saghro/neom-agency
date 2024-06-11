import React from 'react';
import About from "../About/About";

function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}

export default function Solutions() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-1/2 bg-[#272D4E] p-8 text-white flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 md:ml-7">
                    découvrez nos <br /> solutions,<br /> Seulement avec <br /> <span className="text-[#FF997F]">Neom</span>
                </h1>
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <ul className="space-y-8 md:space-y-16">
                    <li className="flex flex-col md:flex-row items-center transition-transform duration-300 hover:translate-x-2">
                        <span className="text-4xl md:text-5xl font-bold text-gray-300 mr-4">01</span>
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl font-bold mb-1 text-[#272D4E]">Référencement naturel (SEO)</h2>
                            <p className="text-gray-600">Nous vous aidons à élaborer une stratégie de référencement sur mesure en identifiant vos mots-clés, optimisant votre contenu et en structurant votre site web.</p>
                        </div>
                        <ChevronRightIcon className="text-[#6f42c1] h-6 w-6 md:h-8 md:w-8" />
                    </li>
                    <li className="flex flex-col md:flex-row items-center transition-transform duration-300 hover:translate-x-2">
                        <span className="text-4xl md:text-5xl font-bold text-gray-300 mr-4">02</span>
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl font-bold mb-1 text-[#272D4E]">Formation</h2>
                            <p className="text-gray-600">Neom vous offre des programmes de formations sur mesure afin d’améliorer vos différentes compétences.</p>
                        </div>
                        <ChevronRightIcon className="text-[#6f42c1] h-6 w-6 md:h-8 md:w-8" />
                    </li>
                    <li className="flex flex-col md:flex-row items-center transition-transform duration-300 hover:translate-x-2">
                        <span className="text-4xl md:text-5xl font-bold text-gray-300 mr-4">03</span>
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl font-bold mb-1 text-[#272D4E]">Référencement SEA</h2>
                            <p className="text-gray-600">Nous vous accompagnons dans le conseil, la mise en place, le suivi et l’optimisation des campagnes de référencement payant pour réussir vos projets.</p>
                        </div>
                        <ChevronRightIcon className="text-[#6f42c1] h-6 w-6 md:h-8 md:w-8" />
                    </li>
                    <li className="flex flex-col md:flex-row items-center transition-transform duration-300 hover:translate-x-2">
                        <span className="text-4xl md:text-5xl font-bold text-gray-300 mr-4">04</span>
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl font-bold mb-1 text-[#272D4E]">Développement Web et Mobile</h2>
                            <p className="text-gray-600">Création des sites web, création des applications mobiles...</p>
                        </div>
                        <ChevronRightIcon className="text-[#6f42c1] h-6 w-6 md:h-8 md:w-8" />
                    </li>
                </ul>
            </div>
        </div>
    );
}
