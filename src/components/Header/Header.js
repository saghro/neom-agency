import React, { useState, useEffect } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logoWhite from "../../images/neomlogowhite.png";
import logoBlack from "../../images/logo.jpeg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 
import "./Header.css";
 
const Header = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [dropdownOpen, setDropdownOpen] = useState(false);
 
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 100);
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
        if (isMenuOpen) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }
    };
 
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const handleLoginClick = () => {
        window.open('https://bill.neom-agency.com/authentication/login', '_blank');
    };
    return (
        <div>
            <div className="top-bar">
                <div className="language-selector">FR|EN</div>
                <div className="contact-info hidden sm:flex items-center gap-4">
                    <div className="phone-icon">
                        <p><FontAwesomeIcon icon={faPhone} size="lg" />+33 1 12 34 56 78</p>
                    </div>
                    <div className="email-icon">
                        <p><FontAwesomeIcon icon={faEnvelope} size="lg" /> contact@neom-agency.com </p>
                    </div>
                    <div onClick={handleLoginClick} className="text-white font-bold mx-4 my-2 rounded-full cursor-pointer z-10">
                    <FaUserAlt />
                    </div>
                </div>
            </div>
            <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDesktop && !isScrolled ? 'mt-6' : ''}`} style={{ transition: 'padding-top 0.3s, margin-top 0.3s' }}>
                <a href="/">
                    <img
                        className={`logo`}
                        src={isScrolled ? logoBlack : (isDesktop ? logoWhite : logoBlack)}
                        alt="Logo"
                    />
                </a>
                <nav className={`flex ${isDesktop ? 'block' : 'hidden'}`}>
                    <ul className="flex gap-10 text-lg ml-56 pr-64 text-black-100 cursor-pointer">
                        <li>Agence</li>
                        <li className="relative" onClick={toggleDropdown}>
                            Expertise <FontAwesomeIcon icon={faChevronDown} />
                            <ul className={`dropdown-content absolute hidden text-gray-500 pt-1 bg-gray-100 backdrop-blur transition-all duration-300 ease-in-out ${dropdownOpen ? 'block opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                <li><a href="/identité-de-marque" className="dropdown-item">Identite De Marque</a></li>
                                <li><a href="/markting" className="dropdown-item">Marketing</a></li>
                                <li><a href="/web" className="dropdown-item">Développement Web et Mobile</a></li>
                                <li><a href="/Formation" className="dropdown-item">Formations</a></li>
                                <li><a href="/communication" className="dropdown-item">Communication</a></li>
                            </ul>
                        </li>
                        <li><Link to="/realisation" className="dropdown-item">Realisation</Link></li>
                        <li><Link to="/contact" className="dropdown-item">Contact</Link></li>
                    </ul>
                </nav>
                <button className="rejoignez-nous-button relative mx-10 my-3 bg-[#6A71B3] text-white rounded-full shadow-md hover:shadow-lg overflow-hidden cursor-pointer">
                    <span className="relative z-10">rejoignez-nous</span>
                </button>
                <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
                    <div className="flex flex-col items-center">
                        <ul className="flex flex-col gap-2 text-blue-900 mb-96 mr-52 cursor-pointer ">
                            <li>Agence</li>
                            <li className="relative ml-6" onClick={toggleDropdown}>
                                Expertise <FontAwesomeIcon icon={faChevronDown} />
                                <ul className={`dropdown-content text-gray-700 pt-1 bg-gray-100 backdrop-blur transition-all duration-300 ease-in-out mr-64 mt-32 ${dropdownOpen ? 'block opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                    <li><a href="/Social_Media" className="dropdown-item">Identite De Marque</a></li>
                                    <li><a href="/Seo" className="dropdown-item">Marketing</a></li>
                                    <li><a href="/web" className="dropdown-item">Développement Web et Mobile</a></li>
                                    <li><a href="/Formation" className="dropdown-item">Formations</a></li>
                                    <li><a href="/communication" className="dropdown-item">Communication</a></li>
                                </ul>
                            </li>
                            
                            <li><Link to="/contact" className="dropdown-item">Contact</Link></li>

                        </ul>
                        <button onClick={toggleMenu} className="absolute top-16 right-7">
                            <FontAwesomeIcon icon={faTimes} className="text-blue-900" />
                        </button>
                    </div>
                </nav>
                <div className="icons flex items-center gap-9">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-blue-900" />
                    </div>
                </div>
            </header>
        </div>
    );
};
 
export default Header;