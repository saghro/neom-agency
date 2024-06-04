// src/components/HomePage.js
import React from 'react';
import Slider from 'react-slick';
import './HomePage.css';

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="home-page">
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
            <main className="main-content">
                <Slider {...settings}>
                    <div className="service-banner">
                        <h1>services</h1>
                        <p>
                            Accélérez le déploiement de vos projets digitaux les plus ambitieux avec nos experts :
                            environnement utilisateurs, services cloud, infrastructures et hybridation,
                            modernisation des applications et de la data ...
                        </p>
                    </div>
                    <div className="équipements-banner">
                        <h1>équipements</h1>
                        <p>
                            Accélérez le déploiement de vos projets digitaux les plus ambitieux avec nos experts :
                            environnement utilisateurs, services cloud, infrastructures et hybridation,
                            modernisation des applications et de la data ...
                        </p>
                    </div>
                </Slider>
            </main>
        </div>
    );
};

export default HomePage;
