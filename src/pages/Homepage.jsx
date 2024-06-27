import React, { useEffect, useState } from 'react';
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
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <MotionComponent>
        <Home />
      </MotionComponent>
      {showArrow && (
        <motion.div
          className="scroll-arrow"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16L6 10H18L12 16Z"
              fill="black"
            />
          </svg>
        </motion.div>
      )}
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
