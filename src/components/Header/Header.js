import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="top-bar">
                <span>2,40 €</span>
                <span>04-06-2024 - 14:10 (Euronext)</span>
            </div>
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
            <div className="search-icon"></div>
            <div className="menu-icon"></div>
        </header>
    );
};

export default Header;