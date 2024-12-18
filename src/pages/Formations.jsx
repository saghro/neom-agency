import React, { useEffect } from "react";
import Folder from "../components/Services/formation/main";
import Media from "../components/Services/formation/cards-text";
import Actualités from "../components/Services/formation/actualites";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Services/formation/cards";
import Header from "../components/Header/Header";

const Formation = () => {
  useEffect(() => {
    document.title = 'Formation';
  }, []);

  return (
    <>
      <Header />
      <Folder />
      <Media />
      <Cards />
      <Actualités />
      <Footer />
    </>
  );
};

export default Formation;
