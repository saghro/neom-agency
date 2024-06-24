import React from 'react';
import { motion, useInView } from 'framer-motion';
import Home from '../components/Home/Home';
import Header from "../components/Header/Header";
import Solutions from "../components/Solutions/Solutions";
import Footer from "../components/Footer/Footer";
import Cle from "../components/About/Cle";
import About from "../components/About/About";
import MultiCardCarousel from "../components/About/Partenariat";

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const MotionComponent = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 0.5, delay }}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <MotionComponent>
        <Home />
      </MotionComponent>
      <MotionComponent delay={0.2}>
        <Solutions />
      </MotionComponent>
      <MotionComponent delay={0.4}>
        <About />
      </MotionComponent>
      <MotionComponent delay={0.6}>
        <Cle />
      </MotionComponent>
      <MotionComponent delay={0.8}>
        <MultiCardCarousel />
      </MotionComponent>
      <MotionComponent delay={0.9}>
        <Footer />
      </MotionComponent>
    </>
  );
}

export default HomePage;