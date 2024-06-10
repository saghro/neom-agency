import React from "react";
import Seo from '../components/Service/Seo/Seo';
import Stratégi from '../components/Service/Seo/Stratégi';
import Webcard from "../components/Service/Seo/Webcard";
import Loin from "../components/Service/Seo/Loin";
import Footer from '../components/Service/Footer';
import Header from '../components/Service/Navbar'

const home = () => {
    return (
      <>
      <Header/>
      <Seo/>
      <Stratégi/>
      <Webcard/>
      <Loin/>
      <Footer/>
      </>
    )
  }
  
  export default home;