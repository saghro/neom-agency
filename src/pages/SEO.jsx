import React from "react";
import Seo from '../components/Services/Seo/Seo';
import Stratégi from '../components/Services/Seo/Stratégi';
import Webcard from "../components/Services/Seo/Webcard";
import Loin from "../components/Services/Seo/Loin";
import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Header";
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