import React from "react";
import Home from '../components/Home/HomePage';
import Header from "../components/Header/Header";
import Solutions from "../components/Solutions/Solutions";
import About from "../components/About/About";

const home = () => {
    return (
      <>
          <Header/>
          <Home/>
          <Solutions/>
          <About/>
      </>
    )
  }
  
  export default home;