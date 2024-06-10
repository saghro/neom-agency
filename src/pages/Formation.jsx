import React from "react";
import Formation from "../components/services/formation/formation";
import Folder from "../components/services/formation/main";
import Media from "../components/services/formation/cards-text";
import Actualités from "../components/services/formation/actualites";
import Footer from "../components/Footer/Footer";

const formation = () => {
  return (
    <>
      <Formation />
      <Folder />
      <Media />
      <Actualités />
      <Footer />
    </>
  );
};

export default formation;
