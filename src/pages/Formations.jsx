import React from "react";
import Folder from "../components/services/formation/main";
import Media from "../components/services/formation/cards-text";
import Actualités from "../components/services/formation/actualites";
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