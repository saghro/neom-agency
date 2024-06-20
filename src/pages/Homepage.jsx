import React from 'react';
import Home from '../components/Home/Home';
import { Fade } from 'react-reveal';
import Header from "../components/Header/Header";
import Solutions from "../components/Solutions/Solutions";
import Footer from "../components/Footer/Footer";
import Cle from "../components/About/Cle";
import About from "../components/About/About";
import MultiCardCarousel from "../components/About/Partenariat";
import Valeur from "../components/About/Valeur";

const HomePage = () => {
  return (
    <>
      <Header />
      <Fade>
        <Home />
      </Fade>
      <Fade>
        <Solutions />
      </Fade>
      <Fade>
        <About />
      </Fade>
      <Fade>
        <Cle />
      </Fade>
      <Fade>
        <MultiCardCarousel />
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </>
  );
}

export default HomePage;
