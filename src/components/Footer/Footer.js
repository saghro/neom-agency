
import { FaLinkedinIn, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer =()=>{
        return (
            <>
            <div className="h-32 flex items-center justify-center ">
                <div className="flex justify-center mt-4 space-x-8">
                    <a href="https://linkedin.com">
                        <FaLinkedinIn className="text-xl cursor-pointer"/>
                    </a>
                    <a href="https://facebook.com">
                        <FaFacebook className=" text-xl cursor-pointer"/>
                    </a>
                    <a href="https://instagram.com">
                        <FaInstagram className=" text-xl cursor-pointer"/>
                    </a>
                    <a href="https://youtube.com">
                        <FaYoutube className="text-xl cursor-pointer"/>
                    </a>
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
)
}
export default Footer