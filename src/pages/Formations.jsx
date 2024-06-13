import React from "react";
import Folder from "../components/services/formation/main";
import Media from "../components/services/formation/cards-text";
import Actualités from "../components/services/formation/actualites";
import Folder from "../components/services/formation/main";
import Media from "../components/services/formation/cards-text";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const formation = () => {
  return (
    <>
      <Header />
      <Folder />
      <Media />
      <Footer />
    </>
  );
};

export default formation;