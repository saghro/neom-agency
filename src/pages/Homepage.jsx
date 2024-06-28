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
 
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions-section');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <>
      <Header />
      <MotionComponent>
        <Home />
      </MotionComponent>
      {showArrow && (
        <motion.button
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
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={scrollToSolutions}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 416.031 416.031"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M221.605,0h-31.913C123.743,0,72.083,53.745,72.083,122.356v171.306c0,68.618,51.66,122.369,117.609,122.369h31.913
              c67.46,0,122.343-54.894,122.343-122.369V122.356C343.948,54.889,289.065,0,221.605,0z M206.781,64.12h2.469
              c3.859,0,7,3.14,7,7v49.833c0,3.86-3.141,7-7,7h-2.469c-3.859,0-7-3.14-7-7V71.12C199.781,67.26,202.922,64.12,206.781,64.12z
              M327.948,293.662c0,58.652-47.705,106.369-106.343,106.369h-31.913c-56.978,0-101.609-46.723-101.609-106.369V122.356
              C88.083,62.718,132.715,16,189.692,16h10.225v33.167c-9.34,2.927-16.136,11.661-16.136,21.954v49.833
              c0,10.292,6.796,19.027,16.136,21.953v41.166c0,4.418,3.582,8,8,8s8-3.582,8-8v-41.108c9.441-2.865,16.333-11.647,16.333-22.011
              V71.12c0-10.364-6.892-19.146-16.333-22.012V16h5.688c58.638,0,106.343,47.711,106.343,106.356V293.662z"
              fill="black"
            />
          </svg>
        </motion.button>
      )}
      <MotionComponent delay={0.2}>
        <div id="solutions-section">
          <Solutions />
        </div>
      </MotionComponent>
      <MotionComponent delay={0.4}>
        <About />
      </MotionComponent>
   
        <MultiCardCarousel />
        <Footer />
    </>
  );
}
 
export default HomePage;
 
