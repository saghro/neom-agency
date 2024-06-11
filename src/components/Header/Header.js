import React, { useState, useEffect } from 'react';
import { PiUserCirclePlusBold } from 'react-icons/pi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from "../../images/logo.jpeg";
import { Link } from 'react-router-dom'; 
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleScroll = () => {
            const isTopOfPage = window.scrollY < 100;
            setIsScrolled(!isTopOfPage);
        };

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="top-bar h-15 bg-blue-900 text-white flex justify-between p-2 hidden sm:flex">
                <div className="language-selector">FR|EN</div>
                <div className="contact-info hidden sm:flex items-center gap-4">
                    <div className="phone-icon">
                        <p><FontAwesomeIcon icon={faPhone} size="lg"/>+33 1 12 34 56 78</p>
                    </div>
                    <div className="email-icon">
                        <p><FontAwesomeIcon icon={faEnvelope} size="lg"/> contact@neom-agency.com </p>
                    </div>
                    <div className="icon-user bg-white text-black font-bold px-4 py-2 rounded-full">
                        <PiUserCirclePlusBold/>
                    </div>
                </div>
            </div>
            <header
                className={`header fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 flex justify-between items-center p-4 sm:p-10 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                <Link to="/"> 
                    <img className="logo h-10 sm:h-20" src={logo} alt="Logo"/>
                </Link>
                <nav className={`flex flex-row gap-9 ${isDesktop ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-row gap-9 text-xl">
                        <li>Agence</li>
                        <li>Expertise</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <nav
                    className={`nav ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-blue-900 p-4 sm:p-0`}>
                    <ul className="flex flex-col gap-1">
                        <li className="text-white cursor-pointer">Agence</li>
                        <li className="text-white cursor-pointer">Expertise</li>
                        <li className="text-white cursor-pointer">Contact</li>
                    </ul>
                </nav>
                <button className="join-button bg-blue-900 text-white px-4 py-2 rounded-full font-bold hidden sm:block">
                    rejoignez-nous
                </button>
                <div className="icons flex items-center gap-9">
                
                    <div className="menu-icon" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" className="text-blue-900"/>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;
