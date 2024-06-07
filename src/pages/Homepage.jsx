import React from "react";
import Home from '../components/Home/HomePage';
import Header from "../components/Header/Header";
import Solutions from "../components/Solutions/Solutions";
import Footer from "../components/Footer/Footer";
import Cle from "../components/About/Cle";
import About from "../components/About/About";

const home = () => {
    return (
      <>
          <Header/>
          <Home/>
          <Solutions/>
          <About/>
          <Cle/>
          <Footer/>

      </>
    )
  }
  
  export default home;