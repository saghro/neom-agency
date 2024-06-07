import React from 'react';
import './HomePage.css';
import  logo from  "../../images/hero.jpeg"

const HomePage = () => {
    return (
        <div className="services-section">
            <div className="text-content">

                <h1>Your First Choice </h1>
                <p>
                    Optimisez votre performance en ligne avec nos <br/> Stratégies, pour transformer votre vision en
                    réalité.<br/>
                    Nous sommes prêts à nous mettre à votre disposition<br/>
                    notre expertise pour un projet réussi.
                </p>
                <button className="join-button">Contact Us</button>
            </div>
            <div className="image-content">
                <img src={logo} alt="Person holding a phone"/>
            </div>
        </div>
    );
};

export default HomePage;