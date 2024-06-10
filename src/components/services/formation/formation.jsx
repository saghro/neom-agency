import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
    <>
      <div>
        <div className="top-bar bg-blue-900 text-white flex justify-between p-2 hidden sm:flex">
          <div className="ml-6">FR|EN</div>
          <div className="-mr-96 flex gap-2"><FaPhoneAlt className="mt-1" />+33 1 12 34 56 78</div>
          <div className="ml-92 mr-6 flex gap-2 "><MdEmail className="mt-1 text-lg" />contact@neom-agency.com</div>
        </div>
        <header
          className={`header fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 flex justify-between items-center p-4 sm:p-8 ${
            isScrolled ? "bg-white" : "bg-transparent"
          } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
          <img className="cursor-pointer h-full mt-6  sm:h-20" src={logo} alt="Logo" />
          <nav
            className={`flex flex-row gap-9 ${isDesktop ? "block" : "hidden"}`}
          >
            <ul className="ml-96 text-white flex flex-row gap-6 cursor-pointer">
              <li>Agence</li>
              <li>Expertise</li>
              <li>Contact</li>
            </ul>
          </nav>
          <nav
            className={`nav ${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-blue-900 p-4 sm:p-0`}
          >
            <ul className="ml-6 flex flex-col gap-4 ">
              <li className="text-white cursor-pointer">Agence</li>
              <li className="text-white cursor-pointer">Expertise</li>
              <li className="text-white cursor-pointer">Contact</li>
            </ul>
          </nav>
          <button className="ml-32 join-button bg-blue-900 text-white px-4 py-2 rounded-full font-bold hidden sm:block">
            rejoignez-nous
          </button>
          <div className="icons flex items-center gap-4">
            <div className="menu-icon" onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                size="2x"
                className="text-white"
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
