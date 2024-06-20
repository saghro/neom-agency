import React, { useState, useEffect } from 'react';
import { PiUserCirclePlusBold } from 'react-icons/pi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logoWhite from "../../images/neomlogowhite.png"; 
import logoBlack from "../../images/logo.jpeg"; 
import headerimg from "../../images/headerlogo.png"
import logo1 from "../../images/logo.jpeg";
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 100);
        };

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768); // Adjust breakpoint as needed
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

    return (
        <div>
            <div className="top-bar bg-blue-900 text-white flex justify-between p-2 hidden sm:flex">
                <div className="language-selector">FR|EN</div>
                <div className="contact-info hidden sm:flex items-center gap-4">
                    <div className="phone-icon">
                        <p><FontAwesomeIcon icon={faPhone} size="lg" />+33 1 12 34 56 78</p>
                    </div>
                    <div className="email-icon">
                        <p><FontAwesomeIcon icon={faEnvelope} size="lg" /> contact@neom-agency.com </p>
                    </div>
                    <div className="icon-user bg-white text-black font-bold px-4 py-2 rounded-full">
                        <PiUserCirclePlusBold />
                    </div>
                </div>
            </div>
            <header className={`header fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 flex justify-between items-center p-4 sm:p-10 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                <Link to="/">
                    <img
                        className={`logo h-10 sm:h-20`}
                        src={isScrolled ? logoBlack : (isDesktop ? logoWhite : logo1)}
                        alt="Logo"
                    />
                </Link>
                <nav className={`flex flex-row gap-9 ${isDesktop ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-row gap-9 text-xl ml-96">
                        <li>Agence</li>
                        <li>Expertise</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <nav className={`nav ${isMenuOpen ? 'show' : ''} fixed top-0 left-0 right-0 bottom-0 bg-white p-4 shadow-lg z-50 transition-all duration-1000 ease-in-out`}>
                    <div className="flex w-full justify-between">
                        <Link to="/">
                            <img className="logo h-10 sm:h-20 mt-9" src={isScrolled ? logoBlack : logoWhite} alt="Logo" />
                        </Link>
                        <ul className="flex flex-col gap-6 w-1/2 text-blue-900 text-1xl mt-32 pr-96">
                            <li>Agence</li>
                            <li>Expertise</li>
                            <li>Contact</li>
                        </ul>

                        <div className="flex w-1/2 flex-col items-center top-8">
                            <div className="social-icons flex mt-12 gap-4">
                                <FontAwesomeIcon icon={faFacebook} size={isDesktop ? "2x" : "lg"} className="text-blue-900 cursor-pointer" />
                                <FontAwesomeIcon icon={faLinkedin} size={isDesktop ? "2x" : "lg"} className="text-blue-900 cursor-pointer" />
                                <FontAwesomeIcon icon={faTwitter} size={isDesktop ? "2x" : "lg"} className="text-blue-900 cursor-pointer" />
                                <FontAwesomeIcon icon={faYoutube} size={isDesktop ? "2x" : "lg"} className="text-blue-900 cursor-pointer" />
                                <button className="project-button bg-blue-900 text-white px-4 py-2 rounded-full font-bold ">
                                    Vous avez un projet ?
                                </button>
                            </div>
                            <button onClick={toggleMenu} className="absolute top-16 right-7">
                                <FontAwesomeIcon icon={faTimes} size={isDesktop ? "2x" : "lg"} className="text-blue-900" />
                            </button>
                            <img className="mobile-image hidden sm:inline rounded-2xl mt-6 h-72" src={headerimg} alt="Mobile Image" />
                        </div>
                    </div>

                </nav>
                <button className="join-button bg-blue-900 text-white px-4 py-2 rounded-full font-bold hidden sm:block">
                    rejoignez-nous
                </button>
                <div className="icons flex items-center gap-9">
                    <div className="menu-icon " onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" className="text-blue-900" />

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;