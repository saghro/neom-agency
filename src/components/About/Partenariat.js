import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
 
import tof from '../../images/mic.png';
import tof2 from '../../images/az.png';
import tof3 from '../../images/allianz.png';
import tof4 from '../../images/cafe.png';
import tof5 from '../../images/gnc.png';
import tof6 from '../../images/point.png';
import tof7 from '../../images/erkan.png';
import tof8 from '../../images/rma.png';
import tof10 from '../../images/tac.png';
import tof11 from '../../images/magic.png';
import tof13 from '../../images/renault.png';
import tof14 from '../../images/aze.png';
import tof15 from '../../images/yek.png';
import tof16 from '../../images/group.png';
 
const items = [
  tof, tof2, tof3, tof4, tof5, tof6, tof7, tof8,
  tof10, tof11, tof13, tof14, tof15, tof16,
];
 
const MultiImageCarousel = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
 
  useEffect(() => {
    const marquee = document.getElementById('marquee');
    if (marquee) {
      setScrollWidth(marquee.scrollWidth / 2);
    }
  }, []);
 
  return (
    <Wrapper>
      <Text>Nos Clients <Span>Confiances</Span></Text>
      <MarqueeContainer>
        <Marquee id="marquee" scrollWidth={scrollWidth}>
          {items.concat(items).map((src, index) => (
            <Image key={index} src={src} alt="" />
          ))}
        </Marquee>
      </MarqueeContainer>
    </Wrapper>
  );
};
 
export default MultiImageCarousel;
 
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 4rem;
`;
 
const Text = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #272D4E;
  text-align: center;
  margin-bottom: 3rem;
 
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
 
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
 
const Span = styled.span`
  color: #6A71B3;
`;
 
const marqueeAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
 
const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
 
const Marquee = styled.div`
  display: flex;
  animation: ${marqueeAnimation} ${props => props.scrollWidth / 100}s linear infinite;
`;
 
const Image = styled.img`
  object-fit: contain;
  width: 200px;
  height: auto;
  margin: 0 15px;
  transition: all 0.3s ease;
  filter: brightness(0.7) grayscale(100%);
  space-between : 1px;
 
  &:hover {
    filter: brightness(1) grayscale(0%);
  }
 
  @media (max-width: 768px) {
    width: 160px;
    margin: 0 10px;
  }
 
  @media (max-width: 480px) {
    width: 120px;
    margin: 0 5px;
  }
`;