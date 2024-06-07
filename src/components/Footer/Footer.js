import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2A2B50] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                    <div className="mb-4 sm:mb-0">
                        <h1 className="text-3xl font-bold">neom.</h1>
                        <p>AGENCY</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-8 w-full sm:w-auto justify-between">
                        <div className="mb-4 sm:mb-0">
                            <h2 className="font-semibold mb-2">PAGES UTILES</h2>
                            <ul>
                                <li><a href="#" className="hover:underline">Services</a></li>
                                <li><a href="#" className="hover:underline">Nous rejoindre</a></li>
                                <li><a href="#" className="hover:underline">Demander un devis</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 sm:mb-0">
                            <h2 className="font-semibold mb-2">PARAMÈTRES DE CONFIDENTIALITÉ</h2>
                            <ul>
                                <li><a href="#" className="hover:underline">Paramètres de cookies</a></li>
                                <li><a href="#" className="hover:underline">Mentions légales</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 sm:mb-0">
                            <h2 className="font-semibold mb-2">BLOG</h2>
                            <ul>
                                <li><a href="#" className="hover:underline">Nos actualités</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 sm:mb-0">
                            <h2 className="font-semibold mb-2">CONTACT</h2>
                            <ul>
                                <li><a href="mailto:neom.contact@gmail.com" className="hover:underline">neom.contact@gmail.com</a></li>
                                <li><a href="tel:+000000000000000" className="hover:underline">+000000000000000</a></li>
                                <li><a href="#" className="hover:underline">Paris, France</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
                    <div className="mb-4 sm:mb-0">
                        <button className="bg-[#4A4B72] text-white px-6 py-2 rounded-full">Subscribe</button>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline"><i className="fab fa-youtube"></i></a>
                        <a href="#" className="hover:underline"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="hover:underline"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="hover:underline"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;