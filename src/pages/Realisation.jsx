import React ,{useEffect} from 'react';
import ImageGallery from '../components/Gallery/ImageGallery';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Gallery/Hero';
function Realisation() {
  useEffect(() => {
    document.title = 'Réalisation';
  }, []);
  return (
    <>
        <Header />
        <Hero/>
        <ImageGallery/>
        <Footer />
    </>
  );
}

export default Realisation;
