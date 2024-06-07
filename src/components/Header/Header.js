import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PiUserCirclePlusBold } from "react-icons/pi";
import logo from "../../images/logo.jpeg";
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTopOfPage = window.scrollY < 100;
            setIsScrolled(!isTopOfPage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="top-bar">
                <div className="language-selector">FR|EN</div>
                <div className="contact-info">
                    <p>
                        <FaPhone /> +33 122 34 56 78
                    </p>
                    <p>
                        <MdEmail /> contact@neomagency.com
                    </p>
                </div>
                <button className="icon-user"><PiUserCirclePlusBold />

                </button>
            </div>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <img className="logo" src={logo} alt="Logo" />
                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>Agence</li>
                        <li>Expertise</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <button className="join-button">
                    <FontAwesomeIcon size="2x" /> rejoignez-nous
                </button>
                <div className="icons">
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;