import React from "react";
import Seo from '../components/services/Seo/Seo';
import Stratégi from '../components/services/Seo/Stratégi';
import Webcard from "../components/services/Seo/Webcard";
import Loin from "../components/services/Seo/Loin";
import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Header";
import DevCases from "../components/services/Seo/DevCases";

const home = () => {
    return (
      <>
      <Header/>
      <Seo/>
      <Stratégi/>
      <Webcard/>
      <DevCases/>
      <Loin/>
      <Footer/>
      </>
    )
  }
  
  export default home;