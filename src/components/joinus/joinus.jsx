import React from 'react';
import image from '../../assests/z.png';
import girlimage from '../../assests/portrait-young-beautiful-woman-gesticulating.jpg'
import menimage from '../../assests/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign.jpg'
const JoinusPage = () => {
    return (
<>
    <div className='sticky top-0 z-50 shadow shadow-xl bg-white border flex justify-between flex items-center justify-center p-4'>
<a href="#" className='text-4xl ml-2 font-montserrat text-[#2e1065] cursor-pointer'>econom</a>
    <div className='flex gap-12 leading-3 text-[#654a9a] font-medium cursor-pointer'>
        <a href='#' className='list-none hover:underline  hover:text-[#f87171]'>nos offres d'emploi</a>
        <a href='#' className='list-none hover:underline hover:text-[#f87171]'>candidature spontanée</a>
        <a href='#' className='list-none mr-3 hover:underline hover:text-[#f87171]'>Site corporate</a>
    </div>
</div>
<div className='bg-black h-96'>
    <img src={image} 
    alt=""
    className='h-120 w-full'
    />
</div>
<div className='shadow drop-shadow-lg mt-20 flex flex-row border h-24 bg-white text-black'>
    <input className='hover:text-black bg-white border border-gray-400 px-10 mt-6 mb-6 ml-28 text-white align-center mb-2 rounded-lg' placeholder='Poste, mots clés' type="text" />
    <input className='bg-white border-gray-400 border px-10 mt-6 mb-6 ml-28 rounded-lg' placeholder='Localisation' type="text" />
    <button type="button" class="text-white mt-6 mb-6 ml-28 bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-16 mb-2 ">Rechercher</button>
</div>
<div className='flex justify-between'>
<img className='h-72 mb-24 w-120 ml-24 mt-24 aspect-video' src={girlimage} alt="GIRL IMAGE" />
<div>
<p className='text-4xl font-bold text-[#2e1065] ml-16 mb-6 mr-64 mt-24'>Plus de 20 métiers</p>
<p className='text-3xl font-bold font-montserrat text-[#a955f3] ml-20 mr-12 mb-6 '>dans les technologies informatiques, de la vente et du support</p>
<p className='ml-16 mr-8 text-[#2e1065]'><span className='font-bold'>Équipements, services, financement, reconditionnement </span> – ajoutés à toute </p>
<p className='ml-12 mr-8 text-[#2e1065]'>l’expertise de la coordination opérationnelle des projets accumulée depuis </p>
<p className='-ml-8 mr-8 text-[#2e1065]'>50 ans, Econocom s’impose comme le partenaire privilégié des </p>
<p className='ml-24 mr-5 text-[#2e1065]'>organisations qui veulent se renforcer dans un monde en profonde transformation. </p>
</div>
</div>
<div className='flex justify-between'>
<div>
<p className='text-4xl font-bold text-[#2e1065] ml-16 mb-6 mr-32 mt-24'>Se former, évoluer, grandir</p>
<p className='text-3xl font-bold font-montserrat text-[#a955f3] -mt-4 -ml-5 mr-12 mb-6 '>dans les technologies informatiques</p>
<p className='ml-8 mr-8 text-[#2e1065]'>Chez Econocom, la prise de responsabilité est encouragée et reconnue. A</p>
<p className='ml-12 mr-8 text-[#2e1065]'>chaque étape de votre parcours, nous vous aidons à déployer vos talents et</p>
<p className='-ml-52 mr-8 text-[#2e1065]'>à identifier les opportunités de carrière.</p>
</div>
<img className='h-72 mb-24 w-120 mr-8 mt-20 aspect-video' src={menimage} alt="GIRL IMAGE" />
</div>
<div className='bg-[#f7f8fc] h-svh'>
<h1 className='font-extrabold text-[#8627db] text-4xl flex flex-end mb-12 ml-8 pt-8'>Nos dernières offres</h1>
<div className='bg-white mt-6 h-28 mr-8 ml-8 hover:shadow-xl cursor-pointer flex items-center justify-between group'>
    <p className='ml-6 font-bold text-[#3e0e81] group-hover:text-[#a955f3] text-xl'>Administrateur Systèmes et Réseaux (H/F)</p>
    <div className='flex'>
        <p className='text-[#3e0e81] mr-16 group-hover:text-[#a955f3] text-xl'>06560</p>
        <p className='text-[#3e0e81] ml-4 group-hover:text-[#a955f3] text-xl'>Valbonne</p>
    </div>
    <p className='text-[#3e0e81] mr-20 text-lg border rounded-lg pl-2 pr-2 bg-[#f0f9ff] group-hover:text-[#a955f3]'>CDI</p>
</div>
<div className='bg-white mt-8 h-28 mr-8 ml-8 hover:shadow-xl group cursor-pointer hover:text-[#a955f3] flex items-center justify-between'>
    <p className='ml-6 font-bold text-[#3e0e81] group-hover:text-[#a955f3] text-xl'>Technicien Support Informatique H/F</p>
    <div className='flex'>
    <p className='text-[#3e0e81] group-hover:text-[#a955f3] mr-8 text-xl'>31770</p>
    <p className='text-[#3e0e81] group-hover:text-[#a955f3] ml-8 text-xl'>Colomiers</p>
    </div>
    <p className='text-[#3e0e81] mr-20 group-hover:text-[#a955f3] text-lg border rounded-lg pl-2 pr-2 bg-[#f0f9ff]'>CDI</p>
</div>
<div className='bg-white mt-8 h-28 mr-8 ml-8 hover:shadow-xl group cursor-pointer hover:text-[#a955f3] flex items-center justify-between'>
    <p className='ml-6 font-bold text-[#3e0e81] group-hover:text-[#a955f3] text-xl'>Assistant(e)</p>
    <div className='flex'>
    <p className='text-[#3e0e81] group-hover:text-[#a955f3] mr-8 ml-64 text-xl'>93160</p>
    <p className='text-[#3e0e81] group-hover:text-[#a955f3] ml-8 text-xl'>Noisy-le-Grand</p>
    </div>
    <p className='text-[#3e0e81] group-hover:text-[#a955f3] mr-20 text-lg border rounded-lg pl-2 pr-2 bg-[#f0f9ff]'>CDI</p>
</div>
</div>
</>
    );

};
export default JoinusPage;