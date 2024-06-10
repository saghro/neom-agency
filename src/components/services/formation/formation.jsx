import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assests/neomlogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isTopOfPage = currentScrollPos < 100;
      setIsScrolled(!isTopOfPage);
      setIsVisible(prevScrollPos > currentScrollPos || isTopOfPage);
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="top-bar bg-blue-900 text-white flex justify-between items-center p-2 hidden sm:flex">
        <div className="ml-6">FR|EN</div>
        <div className="flex gap-2"><FaPhoneAlt className="mt-1" />+33 1 12 34 56 78</div>
        <div className="flex gap-2 mr-6"><MdEmail className="mt-1 text-lg" />contact@neom-agency.com</div>
      </div>
      <header
        className={`header fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 flex justify-between items-center p-4 sm:p-8 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <img className="cursor-pointer h-12 sm:h-20" src={logo} alt="Logo" />
        {isDesktop ? (
          <div className="hidden sm:flex flex-row gap-9">
            <ul className="flex flex-row gap-8 text-black sm:text-white cursor-pointer">
              <li>Agence</li>
              <li>Expertise</li>
              <li>Contact</li>
            </ul>
          </div>
        ) : (
          <div className="icons flex items-center cursor-pointer gap-4 sm:hidden">
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              size="2x"
              className="text-black sm:text-white"
              onClick={toggleMenu}
            />
          </div>
        )}
        <button className="join-button bg-blue-900 text-white px-4 py-2 rounded-full font-bold hidden sm:block">
          Rejoignez-nous
        </button>
      </header>
      {isMenuOpen && (
        <nav className="mobile-nav absolute top-16 left-0 w-full text-center bg-white p-4 sm:hidden z-50">
          <ul className="flex flex-col gap-4 w-full">
            <li className="text-black cursor-pointer">Agence</li>
            <li className="text-black cursor-pointer">Expertise</li>
            <li className="text-black cursor-pointer">Contact</li>
            <li className="join-button bg-blue-900 text-white px-4 py-2 rounded-full font-bold mt-4">
              Rejoignez-nous
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
