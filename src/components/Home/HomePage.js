import React from 'react';
import logo from "../../images/hero.jpeg";

const HomePage = () => {
    return (

        <div
            className="services-section flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-96 px-4 py-36 md:py-72 bg-[#FF997F] md:px-44 mb-0">
            <div
                className="text-content w-full md:w-1/2 mb-9 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4 text-white">Your First Choice</h1>
                <p className="text-white mb-2 md:text-xl ">
                    Optimisez votre performance en ligne avec nos <br/> Stratégies, pour transformer votre vision en
                    réalité.<br/>
                    Nous sommes prêts à nous mettre à votre disposition<br/>
                    notre expertise pour un projet réussi.
                </p>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-full font-bold">Contact Us</button>
            </div>
            <div className=" w-full hidden md:flex -scale-x-100 ">
                <img src={logo} alt="Person holding a phone" className="w-full h-full object-cover"/>
            </div>
        </div>

    );
};

export default HomePage;
