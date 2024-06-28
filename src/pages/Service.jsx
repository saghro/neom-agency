import React from 'react'
import Service from '../components/Services/Social/Service';
import Media from '../components/Services/Social/Media';
import Video from '../components/Services/Social/Video';
import Actualités from '../components/Services/Social/Actualités';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SocCases from '../components/Services/Social/SocCases';

const service = () => {
  return (
    <>
     <Header/>
    <Service/>
    <Media />
    <Video/>
    <SocCases/>
    <Actualités/>
    <Footer/>
   
    

      
    </>
  )
}

export default service
