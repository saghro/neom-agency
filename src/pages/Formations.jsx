import React from "react";
import Folder from "../components/Services/formation/main";
import Media from "../components/Services/formation/cards-text";
import Actualités from "../components/Services/formation/actualites";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Cards from "../components/services/formation/cards";

const formation = () => {
  return (
    <>
      <Header />
      <Folder />
      <Media />
      <Cards/>
      <Actualités />
      <Footer />
      
    </>
  );
};

export default formation;