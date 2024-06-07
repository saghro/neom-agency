import React from "react";
import image from "../../assests/handsome-caucasian-man-casual-outfit-pointing-fingers-left-smiling-showing-promo-offer-standi.jpg";
import girlimage from "../../assests/portrait-young-beautiful-woman-gesticulating.jpg";
import logo from "../../assests/image.png";
import logonobg from "../../assests/logonobg.png";
import menimage from "../../assests/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const JoinusPage = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <>
      <div className="sticky top-0 z-50 shadow shadow-xl bg-white border flex justify-between flex items-center justify-center p-4">
        <a href="#">
          <img src={logo} alt="logo" className="h-16 w-36" />
        </a>
        <div className="flex gap-12 leading-3 text-[#654a9a] font-medium cursor-pointer">
          <a
            href="#"
            alt=""
            className="list-none hover:underline hover:underline-offset-16 hover:text-[#f87171]"
          >
            nos offres d'emploi
          </a>
          <a
            href="#"
            alt=""
            className="list-none hover:underline hover:underline-offset-16 hover:text-[#f87171]"
          >
            candidature spontanée
          </a>
          <a
            href="#"
            alt=""
            className="list-none mr-3 hover:underline hover:underline-offset-16 hover:text-[#f87171]"
          >
            Site corporate
          </a>
        </div>
      </div>
      <div className="bg-black h-96">
        <img src={image} alt="" className="h-96 w-full" />
      </div>
      <div className="shadow drop-shadow-lg mt-12 flex flex-row border h-24 bg-white text-black">
        <input
          className="bg-white border border-gray-400 px-5 mt-6 mb-6 ml-28 text-black align-center mb-2 rounded-lg"
          placeholder="Poste, mots clés"
          type="text"
        />
        <input
          className="bg-white border-gray-400 border px-5 mt-6 mb-6 ml-28 rounded-lg"
          placeholder="Localisation"
          type="text"
        />
        <button
          type="button"
          class="text-white mt-6 mb-6 ml-28 bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-16 mb-2 "
        >
          Rechercher
        </button>
      </div>
      <div className="flex justify-between">
        <img
          className="h-72 mb-24 w-120 ml-24 mt-24 aspect-video"
          src={girlimage}
          alt="GIRL"
        />
        <div className="text-left ml-24">
          <p className="text-4xl font-bold text-[#2e1065] mb-6 mt-24">
            Plus de 20 métiers
          </p>
          <p className="text-3xl font-bold font-montserrat text-[#a955f3] mb-6 ">
            dans les technologies informatiques, de la vente et du support
          </p>
          <p className="text-[#2e1065]">
            <span className="font-bold">
              Équipements, services, financement, reconditionnement{" "}
            </span>{" "}
            – ajoutés à toute{" "}
          </p>
          <p className="text-[#2e1065]">
            l’expertise de la coordination opérationnelle des projets accumulée
            depuis{" "}
          </p>
          <p className="text-[#2e1065]">
            50 ans, Econocom s’impose comme le partenaire privilégié des{" "}
          </p>
          <p className="text-[#2e1065]">
            organisations qui veulent se renforcer dans un monde en profonde
            transformation.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-left ml-16">
          <p className="text-4xl font-bold text-[#2e1065] mb-6 mt-24">
            Se former, évoluer, grandir
          </p>
          <p className="text-3xl font-bold font-montserrat text-[#a955f3] -mt-4 mb-6 ">
            dans les technologies informatiques
          </p>
          <p className=" text-[#2e1065]">
            Chez Econocom, la prise de responsabilité est encouragée et
            reconnue. A
          </p>
          <p className=" text-[#2e1065]">
            chaque étape de votre parcours, nous vous aidons à déployer vos
            talents et
          </p>
          <p className="text-[#2e1065]">
            à identifier les opportunités de carrière.
          </p>
        </div>
        <img
          className="h-72 mb-24 w-120 mr-8 mt-20 aspect-video"
          src={menimage}
          alt="GIRL"
        />
      </div>
      <div className="bg-[#f7f8fc] h-svh">
        <h1 className="font-extrabold text-[#8627db] text-4xl flex flex-end mb-12 ml-8 pt-8">
          Nos dernières offres
        </h1>
        <div className="bg-white mt-6 h-28 mr-8 ml-8 hover:shadow-xl cursor-pointer flex items-center justify-between group">
          <p className="ml-6 font-bold text-[#3e0e81] group-hover:text-[#a955f3] text-xl">
            Administrateur Systèmes et Réseaux (H/F)
          </p>
          <div className="flex">
            <p className="text-[#3e0e81] mr-16 group-hover:text-[#a955f3] text-xl">
              06560
            </p>
            <p className="text-[#3e0e81] ml-4 group-hover:text-[#a955f3] text-xl">
              Valbonne
            </p>
          </div>
          <p className="text-[#3e0e81] mr-20 text-lg border rounded-lg pl-2 pr-2 bg-[#f0f9ff] group-hover:text-[#a955f3]">
            CDI
          </p>
        </div>
        <div className="bg-white mt-8 h-28 mr-8 ml-8 hover:shadow-xl group cursor-pointer hover:text-[#a955f3] flex items-center justify-between">
          <p className="ml-6 font-bold text-[#3e0e81] group-hover:text-[#a955f3] text-xl">
            Technicien Support Informatique H/F
          </p>
          <div className="flex">
            <p className="text-[#3e0e81] group-hover:text-[#a955f3] mr-8 text-xl">
              31770
            </p>
            <p className="text-[#3e0e81] group-hover:text-[#a955f3] ml-8 text-xl">
              Colomiers
            </p>
          </div>
          <p className="text-[#3e0e81] mr-20 group-hover:text-[#a955f3] text-lg border rounded-lg pl-2 pr-2 bg-[#f0f9ff]">
            CDI
          </p>
        </div>
        <div className="bg-white mt-8 h-28 mr-8 ml-8 hover:shadow-xl group cursor-pointer hover:text-[#a955f3] flex items-center justify-between">
          <p className="ml-6 font-bold text-[#3e0e81] group-hover:text-[#a955f3] text-xl">
            Assistant(e)
          </p>
          <div className="flex">
            <p className="text-[#3e0e81] group-hover:text-[#a955f3] mr-8 ml-64 text-xl">
              93160
            </p>
            <p className="text-[#3e0e81] group-hover:text-[#a955f3] ml-8 text-xl">
              Noisy-le-Grand
            </p>
          </div>
          <p className="text-[#3e0e81] group-hover:text-[#a955f3] mr-20 text-lg border rounded-lg pl-2 pr-2 bg-[#f0f9ff]">
            CDI
          </p>
        </div>
        <button className="bg-[#ff997f] text-white pl-6 pr-6 pt-2.5 pb-2.5 mt-6 mb-6 text-xl font-medium rounded-xl">
          Voir toutes les offres
        </button>
      </div>
      <div className="mt-8 bg-[#272D4E] text-white h-fut pb-8">
        <div className="flex justify-between ">
          <div>
            <img src={logonobg} alt="" className="mt-6 ml-6 h-16 w-36" />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-600 mt-8 rounded-2xl pt-2 pb-2 pr-48 pl-6"
              placeholder="Sub To our Newsletter"
            />
            <button
              type="submit"
              className="bg-white text-[#6c529e] text-lg font-bold pb-2 pt-2 pb-2 pl-6 ml-16 pr-6 mr-48 mt-8 rounded-2xl"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="h-32 flex items-center justify-center">
          <div className="flex justify-center mt-4 space-x-8">
            <a href="https://linkedin.com">
              <FaLinkedinIn className="text-xl cursor-pointer" />
            </a>
            <a href="https://facebook.com">
              <FaFacebook className=" text-xl cursor-pointer" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className=" text-xl cursor-pointer" />
            </a>
            <a href="https://youtube.com">
              <FaYoutube className="text-xl cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-8 ml-12">
            <h2 className="font-bold">Pages Utils</h2>

            <li className="list-none mt-2">Services</li>
            <li className="list-none mt-2">Nous rejoindre</li>
            <li className="list-none mt-2">Demander un devis</li>
            <li className="list-none mt-2">FAQ</li>
          </div>
          <div className="mt-6">
            <h2 className="font-bold mt-2">Paramètre de confidentialités</h2>
            <li className="list-none mt-2">Paramètre de cookies</li>
            <li className="list-none mt-2">Mentions légales</li>
          </div>
          <div className="mt-8">
            <h2 className="font-bold">Blog</h2>
            <li className="list-none mt-2">Nos actualités</li>
          </div>
          <div className="mt-7 mr-12">
            <h2 className="font-bold">Contact</h2>
            <li className="list-none mt-2">neom.contact@gmail.com</li>
            <li className="list-none mt-2">+33 00000000</li>
            <li className="list-none mt-2">Paris, France</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinusPage;