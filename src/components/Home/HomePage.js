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
        autoplaySpeed: 3000,
        arrows: false,
        customPaging: () => (
            <div className="custom-dot"></div>
        ),
        appendDots: dots => (
            <div>
                <ul className="custom-dots"> {dots} </ul>
            </div>
        )
    };

    return (
        <div className="home-page">
            <main className="main-content">
                <Slider {...settings}>
                    <div className="service-banner">
                        <h1>services</h1>
                        <p>
                            Accélérez le déploiement de vos projets digitaux les plus ambitieux avec nos experts :<br/>
                            environnement utilisateurs, services cloud, infrastructures et hybridation,<br/>
                            modernisation des applications et de la data ...
                        </p>
                    </div>
                    <div className="équipements-banner">
                        <h1>équipements</h1>
                        <p>
                            Accélérez le déploiement de vos projets digitaux les plus ambitieux avec nos experts :<br/>
                            environnement utilisateurs, services cloud, infrastructures et hybridation,<br/>
                            modernisation des applications et de la data ...
                        </p>
                    </div>
                </Slider>
            </main>
        </div>
    );
};

export default HomePage;
