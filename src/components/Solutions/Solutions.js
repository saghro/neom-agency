// Importez les modules nécessaires
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Composants pour chaque solution
const SeoPage = () => <div>SEO Page Content</div>;
const FormationPage = () => <div>Formation Page Content</div>;
const SeaPage = () => <div>SEA Page Content</div>;
const DevelopmentPage = () => <div>Development Page Content</div>;

// Composant ChevronRightIcon
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
        <Router>
            <div className="flex h-screen">
                <div className="w-1/2 bg-[#272D4E] p-8 text-white flex flex-col justify-center">
                    <h1 className="text-5xl font-bold mb-4 ml-7">
                        découvrez nos <br /> solutions,<br />Seulement avec <br /> <span className="text-[#FF997F]">Neom</span>
                    </h1>
                </div>
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <ul className="space-y-16">
                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                            <span className="text-4xl font-bold text-gray-300 mr-4">01</span>
                            <div className="flex-1">
                                <Link to="/seo">
                                    <h2 className="text-4xl font-bold mb-1 text-[#272D4E]">Référencement naturel (SEO)</h2>
                                    <p className="text-gray-600">Nous vous aidons à élaborer une stratégie de référencement sur mesure en identifiant vos mots-clés, optimisant votre contenu et en structurant votre site web.</p>
                                </Link>
                            </div>
                            <ChevronRightIcon className="text-[#6f42c1] h-6 w-6" />
                        </li>
                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                            <span className="text-4xl font-bold text-gray-300 mr-4">02</span>
                            <div className="flex-1">
                                <Link to="/formation">
                                    <h2 className="text-4xl font-bold mb-1 text-[#272D4E]">Formation</h2>
                                    <p className="text-gray-600">Neom vous offre des programmes de formations sur mesure afin d’améliorer vos différentes compétences.</p>
                                </Link>
                            </div>
                            <ChevronRightIcon className="text-[#6f42c1] h-6 w-6" />
                        </li>
                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                            <span className="text-4xl font-bold text-gray-300 mr-4">03</span>
                            <div className="flex-1">
                                <Link to="/sea">
                                    <h2 className="text-4xl font-bold mb-1 text-[#272D4E]">Référencement SEA</h2>
                                    <p className="text-gray-600">Nous vous accompagnons dans le conseil, la mise en place, le suivi et l’optimisation des campagnes de référencement payant pour réussir vos projets.</p>
                                </Link>
                            </div>
                            <ChevronRightIcon className="text-[#6f42c1] h-6 w-6" />
                        </li>
                        <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                            <span className="text-4xl font-bold text-gray-300 mr-4">04</span>
                            <div className="flex-1">
                                <Link to="/development">
                                    <h2 className="text-4xl font-bold mb-1 text-[#272D4E]">Développement Web et Mobile</h2>
                                    <p className="text-gray-600">Création des sites web, création des applications mobiles...</p>
                                </Link>
                            </div>
                            <ChevronRightIcon className="text-[#6f42c1] h-6 w-6" />
                        </li>
                    </ul>
                </div>
            </div>

            <Routes>
                <Route path="/seo" element={<SeoPage />} />
                <Route path="/formation" element={<FormationPage />} />
                <Route path="/sea" element={<SeaPage />} />
                <Route path="/development" element={<DevelopmentPage />} />
            </Routes>
        </Router>
    );
}