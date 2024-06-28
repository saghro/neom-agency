import React, { useEffect } from 'react';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;