import React from 'react'
import Service from '../components/services/Social/Service';
import Media from '../components/services/Social/Media';
import Video from '../components/services/Social/Video';
import Actualités from '../components/services/Social/Actualités';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import DevCases from "../components/services/Social/DevCases";

const service = () => {
  return (
    <>
     <Header/>
    <Service/>
    <Media />
    <Video/>
    <DevCases/>
    <Actualités/>
    <Footer/>
   
    

      
    </>
  )
}

export default service
