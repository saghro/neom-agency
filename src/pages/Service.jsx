import React from 'react'
import Service from '../components/Services/Social/Service';
import Media from '../components/Services/Social/Media';
import Video from '../components/Services/Social/Video';
import Actualités from '../components/Services/Social/Actualités';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import DevCases from "../components/Services/Social/DevCases";

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
