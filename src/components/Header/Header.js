import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTopOfPage = window.scrollY < 100; // Ajustez la valeur si nécessaire
            setIsScrolled(!isTopOfPage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">econocom</div>
            <nav className="nav">
                <ul>
                    <li>équipements</li>
                    <li>services</li>
                    <li>financement</li>
                    <li>audiovisuel</li>
                </ul>
            </nav>
            <button className="join-button">rejoignez-nous</button>
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};

export default Header;