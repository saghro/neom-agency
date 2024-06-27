import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='bg-white text-black' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div
        className="flex flex-col lg:flex-row items-center justify-between p-8 min-h-screen text-white font-poppins"
        style={{ background: 'linear-gradient(-45deg, #A8D9E0, #C7A2CB, #6A71B3)', backgroundSize: '400% 400%', animation: 'Gradient 5s ease infinite' }}
      >
        <motion.div 
          className="max-w-xl mb-8 lg:mb-0 text-center mx-auto" 
          style={{ marginTop: '20vh' }}
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <h1 className='text-white text-4xl sm:text-6xl lg:text-6xl font-bold'>Contactez-nous</h1>
          <motion.p 
            className="mt-4 text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            VEUILLEZ NOUS CONTACTER POUR QUE NOUS PUISSIONS VOUS AIDER
          </motion.p>
        </motion.div>
        <style jsx>
          {`
            @keyframes Gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg font-semibold">VOUS POUVEZ NOUS CONTACTER À TOUT MOMENT.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <BuildingIcon className="mx-auto h-12 w-12 text-[#A8D9E0]" />
            <h3 className="mt-2 text-xl font-bold">Neom Agency</h3>
            <p className="mt-1 text-gray-500">
              43 Rue de Auñalny,
              <br />
              95500 Gonesse, France
            </p>
          </div>
          <div className="text-center">
            <PhoneIcon className="mx-auto h-12 w-12 text-[#C7A2CB]" />
            <h3 className="mt-2 text-xl font-bold">Numéro de téléphone</h3>
            <p className="mt-1 text-gray-500">+33 1 12 34 56 78</p>
          </div>
          <div className="text-center">
            <InboxIcon className="mx-auto h-12 w-12 text-[#6A71B3]" />
            <h3 className="mt-2 text-xl font-bold">E-mail</h3>
            <p className="mt-1 text-gray-500"> contact@neom-agency.com </p>
          </div>
        </div>
        <form className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <input
            type="text"
            placeholder="Votre Nom*"
            className='border border-gray-300 bg-white text-black p-2 rounded sm:col-span-1'
          />
          <input
            type="text"
            placeholder="Société"
            className='border border-gray-300 bg-white text-black p-2 rounded sm:col-span-1'
          />
          <input
            type="email"
            placeholder="Email*"
            className='border border-gray-300 bg-white text-black p-2 rounded sm:col-span-1'
          />
          <input
            type="text"
            placeholder="Sujet*"
            className='border border-gray-300 bg-white text-black p-2 rounded sm:col-span-1'
          />
          <input
            type="tel"
            placeholder="Numéro de téléphone*"
            className='border border-gray-300 bg-white text-black p-2 rounded sm:col-span-1'
          />
          <select
            className='border border-gray-300 bg-white text-black p-2 rounded sm:col-span-1'
          >
            <option value="">Type de contact*</option>
            <option value="general">Général</option>
            <option value="support">Support</option>
            <option value="sales">Ventes</option>
          </select>
          <textarea
            placeholder="Votre Message*"
            className='border border-gray-300 bg-white text-black p-2 rounded sm:col-span-2 min-h-[120px]'
          />
          <button
            type="submit"
            className="w-full bg-transparent border-2 border-gradient-to-r from-[#A8D9E0] via-[#C7A2CB] to-[#6A71B3] text-[#6A71B3] py-3 rounded sm:col-span-2 hover:bg-gray-200 transition"
          >
            ENVOYER
          </button>
        </form>
      </div>
    </div>
  );
}

function BuildingIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function InboxIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default Contact;