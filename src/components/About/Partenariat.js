import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import tof from '../../images/image1.png';
import tof2 from '../../images/image3.png';
import tof3 from '../../images/image4.png';
import tof4 from '../../images/image5.png';
import tof5 from '../../images/image6.png';
import tof6 from '../../images/image__7.png';
import tof7 from '../../images/image8.png';
import tof8 from '../../images/image9.png';
import tof10 from '../../images/image11.png';
import tof11 from '../../images/image12.png';
import tof13 from '../../images/image14.png';
import tof14 from '../../images/image (15).jpeg';
import tof15 from '../../images/image16.png';
import tof16 from '../../images/image (17).jpeg';

const items = [
    tof,
    tof2,
    tof3,
    tof4,
    tof5,
    tof6,
    tof7,
    tof8,
    tof10,
    tof11,
    tof13,
    tof14,
    tof15,
    tof16,
];

const MultiImageCarousel = () => {
    useEffect(() => {
        const marquee = document.getElementById('marquee');
        if (marquee) {
            marquee.style.animationPlayState = 'running';
        }
    }, []);

    return (
        <Wrapper>
            <Text>Nos Clients <Span>Confiances</Span></Text>
            <Marquee id="marquee">
                {items.map((src, index) => (
                    <Image key={index} src={src} alt="" />
                ))}
            </Marquee>
        </Wrapper>
    );
};

export default MultiImageCarousel;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #272D4E;
    text-align: center;
    margin-top: 6rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
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

const Marquee = styled.div`
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;
    animation: ${marqueeAnimation} 30s linear infinite paused;

    &:hover {
        animation-play-state: running;
    }

    &::-webkit-scrollbar {
        display: none; /* hide scrollbar */
    }
`;

const Image = styled.img`
    object-fit: contain;
    width: 100px; /* Ajuster la taille des images ici */
    height: auto; /* Garder le ratio d'aspect */
    margin: 0 10px; /* Espacement entre les images */
    transition: all 0.3s ease;
    filter: brightness(0.7) grayscale(100%);

    &:hover {
        filter: brightness(1) grayscale(0%);
    }

    @media (max-width: 768px) {
        width: 80px; /* Ajustement pour les écrans plus petits */
    }

    @media (max-width: 480px) {
        width: 60px; /* Ajustement pour les écrans encore plus petits */
    }
`;
