import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { BiLogoGitlab } from 'react-icons/bi';
import { TiChartPie } from 'react-icons/ti';
import { MdMovieCreation, MdOutlineProductionQuantityLimits, MdOutlineCoPresent } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';

const items = [
  { id: 1, title: 'Création de votre logo', icon: <BiLogoGitlab className="text-color-[#A8D9E0]" /> },
  { id: 2, title: 'Création de votre charte graphique', icon: <TiChartPie /> },
  { id: 3, title: 'Création de vos supports de papeterie', icon: <MdMovieCreation /> },
  { id: 4, title: 'Création de produits promotionnels personnalisés', icon: <MdOutlineProductionQuantityLimits /> },
  { id: 5, title: 'Élaboration de la conception de vos emballages', icon: <AiOutlineProduct /> },
  { id: 6, title: 'Création d\'image de couverture pour vos réseaux sociaux', icon: <MdOutlineCoPresent /> },
  { id: 7, title: 'Rédaction de vos éléments de langage', icon: <GrLanguage /> },
];

function App() {
  const controls = useAnimation();
  const [carouselWidth, setCarouselWidth] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const totalWidth = trackRef.current.scrollWidth;
    setCarouselWidth(totalWidth);

    const animate = async () => {
      while (true) {
        await controls.start({
          x: [-totalWidth, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: items.length * 2.5,
              ease: "linear",
            },
          },
        });
      }
    };

    animate();
  }, [controls]);

  return (
    <AppContainer>
      <Wrapper>
        <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text text-center mb-8 pb-16 lg:mb-0 ">
          Ce que nous vous proposons
        </h1>
        <Marquee>
          <CarouselTrack ref={trackRef} animate={controls}>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <div className="icon">{item.icon}</div>
                <div className="title">{item.title}</div>
              </CarouselItem>
            ))}
          </CarouselTrack>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 64vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Max width to keep content centered and responsive */
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px; /* Adjust padding as needed */
`;

const Marquee = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  width: fit-content;
`;

const CarouselItem = styled.div`
  width: 300px; /* Default width */
  min-width: 250px; /* Minimum width for smaller screens */
  padding: 1.5rem;
  height: 14rem;
  margin-top: 10px;
  margin-left: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(to right, #A8D9E0, #6A71B3, #C7A2CB);
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;