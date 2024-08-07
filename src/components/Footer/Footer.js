import logonobg from '../../images/neomlogowhite.png';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-8 bg-gradient-to-r from-[#A8D9E0] via-[#C7A2CB] to-[#6A71B3] text-white pb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start p-6 lg:p-0 mx-4 lg:mx-20">
        <div className="flex justify-center lg:justify-start mt-10 lg:mt-6 w-full lg:w-auto">
          <img src={logonobg} alt="Logo" className="h-16 w-36" />
        </div>
        <div className="flex flex-col items-center lg:items-end mt-6 lg:mt-6 w-full lg:w-auto">
         

          <div className="flex justify-center lg:justify-end mt-4 space-x-4">
            <a href="https://linkedin.com">
              <FaLinkedinIn className="text-xl cursor-pointer" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className="text-xl cursor-pointer" />
            </a>
            <a href="https://youtube.com">
              <FaYoutube className="text-xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-600 mx-4 lg:mx-20" /> {/* Divider with side margins */}

      <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left mx-4 lg:mx-20">
        <div className="mt-8 lg:ml-12">
          <h2 className="font-bold">Pages Utiles</h2>
          <ul>
            <li className="mt-2">Services</li>
            <li className="mt-2">Nous rejoindre</li>
            <li className="mt-2">Demander un devis</li>
            <li className="mt-2">FAQ</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="font-bold">Paramètres de confidentialité</h2>
          <ul>
            <li className="mt-2">Paramètres de cookies</li>
            <li className="mt-2">Mentions légales</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="font-bold">Blog</h2>
          <ul>
            <li className="mt-2">Nos actualités</li>
          </ul>
        </div>
        <div className="mt-7 lg:mr-12">
          <h2 className="font-bold">Contact</h2>
          <ul>
            <li className="mt-2">contact@neom-agency.com</li>
            <li className="mt-2">01 83 62 40 85</li>
            <li className="mt-2">43 Rue d'aulnay , 95500 Gonesse</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
