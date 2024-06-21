import React from "react";
import Home from '../components/Home/Home';
import Header from "../components/Header/Header";
import Solutions from "../components/Solutions/Solutions";
import Footer from "../components/Footer/Footer";
import Cle from "../components/About/Cle";
import About from "../components/About/About";
import MultiCardCarousel from "../components/About/Partenariat";
import Valeur from "../components/About/Valeur";

const home = () => {
    return (
      <>
          <Header/>
          <Home/>
          <Solutions/>
          <About/>
          <Valeur/>
          <Cle/>
          <MultiCardCarousel/>
          <Footer/>
      </>
    )
  }
  
  export default home;