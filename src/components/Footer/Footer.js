import logonobg from '../../images/neomlogowhite.png'
import { FaLinkedinIn, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <div className="mt-8 bg-[#272D4E] text-white pb-8">
      <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-0 mx-20">
        <div className="flex justify-center lg:justify-start mt-10">
          <img src={logonobg} alt="Logo" className="h-16 w-36" />
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:mt-6">
          <input
            type="text"
            className="bg-gray-600 mt-6 lg:mt-0 rounded-2xl py-2 px-6 w-full lg:w-auto lg:flex-grow"
            placeholder="Sub To our Newsletter"
          />
          <button
            type="submit"
            className="bg-white text-[#6c529e] text-lg font-bold py-2 px-6 mt-4 lg:mt-0 lg:ml-4 rounded-2xl"
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
            <FaFacebook className="text-xl cursor-pointer" />
          </a>
          <a href="https://instagram.com">
            <FaInstagram className="text-xl cursor-pointer" />
          </a>
          <a href="https://youtube.com">
            <FaYoutube className="text-xl cursor-pointer" />
          </a>
        </div>
      </div>
 
      <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left">
        <div className="mt-8 lg:ml-12">
          <h2 className="font-bold">Pages Utils</h2>
          <ul>
            <li className="mt-2">Services</li>
            <li className="mt-2">Nous rejoindre</li>
            <li className="mt-2">Demander un devis</li>
            <li className="mt-2">FAQ</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="font-bold">Paramètre de confidentialités</h2>
          <ul>
            <li className="mt-2">Paramètre de cookies</li>
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
            <li className="mt-2">neom.contact@gmail.com</li>
            <li className="mt-2">+33 00000000</li>
            <li className="mt-2">Paris, France</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;