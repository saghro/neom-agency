import React from 'react'
import Service from '../components/Service/Service';
import Media from '../components/Service/Media';
import Video from '../components/Service/Video';
import Actualités from '../components/Service/Actualités';
import Navbar from '../components/Service/Navbar';
import Footer from '../components/Service/Footer';

const service = () => {
  return (
    <>
    <Navbar/>
    <Service/>
    <Media />
    <Video/>
    <Actualités/>
    <Footer/>
    

      
    </>
  )
}

export default service
