import React, { useState, useEffect } from 'react';
import { PiUserCirclePlusBold } from 'react-icons/pi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logoWhite from "../../images/neomlogowhite.png";
import logoBlack from "../../images/logo.jpeg";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

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
                    <div className="icon-user bg-white text-black font-bold px-4 py-2 rounded-full">
                        <PiUserCirclePlusBold />
                    </div>
                </div>
            </div>
            <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDesktop ? 'pt-16' : ''}`}>
                <Link to="/">
                    <img
                        className={`logo`}
                        src={isScrolled ? logoBlack : (isDesktop ? logoWhite : logoBlack)}
                        alt="Logo"
                    />
                </Link>
                <nav className={`flex ${isDesktop ? 'block' : 'hidden'}`}>
                    <ul className="flex gap-10 text-lg ml-96 pr-64 text-black-100 ">
                        <li>Agence</li>
                        <li>Expertise</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <button className="rejoignez-nous-button  relative px-10 py-3 bg-[#6A71B3] text-white rounded-full shadow-md hover:shadow-lg overflow-hidden mt-2">
                    <span className="relative z-10">rejoignez-nous</span>
                </button>
                <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
                    <div className="flex flex-col items-center">
                        <ul className="flex flex-col gap-2 text-blue-900 mt-32">
                            <li>Agence</li>
                            <li>Expertise</li>
                            <li>Contact</li>
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