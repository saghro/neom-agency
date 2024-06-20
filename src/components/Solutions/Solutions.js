import React from 'react';
import { Link } from 'react-router-dom';

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

export default function Solutions({ small }) {
    return (
        <div className={`flex flex-col md:flex-row  md:h-screen ${small ? 'text-sm' : ''}`}>
            <div className={`w-full md:w-1/2 bg-[#6A71B3] p-8 text-white flex flex-col justify-center ${small ? 'p-4' : 'p-8'}`}>
                <h1 className={`font-bold mb-4 ${small ? 'text-2xl' : 'text-4xl md:text-5xl'} ${small ? '' : 'md:ml-7'}`}>
                    Sublimez votre <br /> image avec,<br /> <span className="text-[#A8D9E0]">Neom</span>
                </h1>
            </div>
            <div className={`w-full md:w-1/2 p-8 flex flex-col justify-center ${small ? 'p-4' : 'p-8'}`}>
                <ul className={`space-y-0 ${small ? 'space-y-2' : 'space-y-5'}`}>
                    <li className="flex flex-col md:flex-row items-center gap-4 md:gap-6 transition-transform duration-300 hover:translate-x-2 border-b border-gray-300 last:border-0 pb-4 md:pb-6">
                        <span className={`font-bold text-gray-300 mr-4 ${small ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>01</span>
                        <div className="flex-1">
                            <Link to="/Social_Media" className="no-underline">
                                <h2 className={`font-bold mb-1 text-[#272D4E] ${small ? 'text-xl' : 'text-2xl md:text-1xl'}`}>Identite De Marque</h2>
                                <p className={`text-gray-600 ${small ? 'text-sm' : ''}`}>Création de Graphiques, Print,Packging ,Signalétique</p>
                            </Link>
                        </div>
                        <ChevronRightIcon className={`text-[#6f42c1] ${small ? 'h-4 w-4' : 'h-6 w-6 md:h-8 md:w-8'}`} />
                    </li>
                    <li className="flex flex-col md:flex-row items-center gap-4 md:gap-6 transition-transform duration-300 hover:translate-x-2 border-b border-gray-300 last:border-0 pb-4 md:pb-6">
                        <span className={`font-bold text-gray-300 mr-4 ${small ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>02</span>
                        <div className="flex-1">
                            <Link to="/Seo" className="no-underline">
                                <h2 className={`font-bold mb-1 text-[#272D4E] ${small ? 'text-xl' : 'text-2xl md:text-1xl'}`}>Communication</h2>
                                <p className={`text-gray-600 ${small ? 'text-sm' : ''}`}>Réseaux sociaux , Strategie de communication</p>
                            </Link>
                        </div>
                        <ChevronRightIcon className={`text-[#6f42c1] ${small ? 'h-4 w-4' : 'h-6 w-6 md:h-8 md:w-8'}`} />
                    </li>
                    <li className="flex flex-col md:flex-row items-center gap-4 md:gap-6 transition-transform duration-300 hover:translate-x-2 border-b border-gray-300 last:border-0 pb-4 md:pb-6">
                        <span className={`font-bold text-gray-300 mr-4 ${small ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>03</span>
                        <div className="flex-1">
                            <Link to="/web" className="no-underline">
                                <h2 className={`font-bold mb-1 text-[#272D4E] ${small ? 'text-xl' : 'text-2xl md:text-1xl'}`}>Développement Web et Mobile</h2>
                                <p className={`text-gray-600 ${small ? 'text-sm' : ''}`}>Développement de site web, Création d'application,UI/UX design ,SEO/SEA</p>
                            </Link>
                        </div>
                        <ChevronRightIcon className={`text-[#6f42c1] ${small ? 'h-4 w-4' : 'h-6 w-6 md:h-8 md:w-8'}`} />
                    </li>
                    <li className="flex flex-col md:flex-row items-center gap-4 md:gap-6 transition-transform duration-300 hover:translate-x-2 border-b border-gray-300 last:border-0 pb-4 md:pb-6">
                        <span className={`font-bold text-gray-300 mr-4 ${small ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>04</span>
                        <div className="flex-1">
                            <Link to="/Formation" className="no-underline">
                                <h2 className={`font-bold mb-1 text-[#272D4E] ${small ? 'text-xl' : 'text-2xl md:text-1xl'}`}>Formations</h2>
                                <p className={`text-gray-600 ${small ? 'text-sm' : ''}`}>E-learning , Tutos ,Coaching</p>
                            </Link>
                        </div>
                        <ChevronRightIcon className={`text-[#6f42c1] ${small ? 'h-4 w-4' : 'h-6 w-6 md:h-8 md:w-8'}`} />
                    </li>
                    <li className="flex flex-col md:flex-row items-center gap-4 md:gap-6 transition-transform duration-300 hover:translate-x-2 pb-4 md:pb-6">
                        <span className={`font-bold text-gray-300 mr-4 ${small ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>05</span>
                        <div className="flex-1">
                            <Link to="/Print" className="no-underline">
                                <h2 className={`font-bold mb-1 text-[#272D4E] ${small ? 'text-xl' : 'text-2xl md:text-1xl'}`}>Marketing</h2>
                                <p className={`text-gray-600 ${small ? 'text-sm' : ''}`}>Data analytics,Publicités,Audit</p>
                            </Link>
                        </div>
                        <ChevronRightIcon className={`text-[#6f42c1] ${small ? 'h-4 w-4' : 'h-6 w-6 md:h-8 md:w-8'}`} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
