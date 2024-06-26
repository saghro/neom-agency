import React from 'react';
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
    { id: 1, src: tof },
    { id: 3, src: tof2 },
    { id: 4, src: tof3 },
    { id: 5, src: tof4 },
    { id: 6, src: tof5 },
    { id: 7, src: tof6 },
    { id: 8, src: tof7 },
    { id: 9, src: tof8 },
    { id: 11, src: tof10 },
    { id: 12, src: tof11 },
    { id: 14, src: tof13 },
    { id: 15, src: tof14 },
    { id: 16, src: tof15 },
    { id: 17, src: tof16 },
];

const MultiCardCarousel = () => (
    <Wrapper>
        <Text>Nos Client <Span>Confiences</Span></Text>
        <Marquee>
            <MarqueeGroup>
                {items.map(item => (
                    <Card key={item.id}>
                        <Image src={item.src} alt="" />
                    </Card>
                ))}
            </MarqueeGroup>
            <MarqueeGroup>
                {items.map(item => (
                    <Card key={item.id}>
                        <Image src={item.src} alt="" />
                    </Card>
                ))}
            </MarqueeGroup>
        </Marquee>
        <Spacer />
        <Marquee>
            <MarqueeGroup2>
                {items.map(item => (
                    <Card key={item.id}>
                        <Image src={item.src} alt="" />
                    </Card>
                ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
                {items.map(item => (
                    <Card key={item.id}>
                        <Image src={item.src} alt="" />
                    </Card>
                ))}
            </MarqueeGroup2>
        </Marquee>
    </Wrapper>
);

export default MultiCardCarousel;

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

const Marquee = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    user-select: none;
`;

const scrollX = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

const MarqueeGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 100%;
    animation: ${scrollX} 30s linear infinite;

    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`;

const MarqueeGroup2 = styled(MarqueeGroup)`
    animation-direction: reverse;
    animation-delay: -3s;
`;

const Spacer = styled.div`
    height: 2rem; /* Adjust the height as needed */
`;

const Card = styled.div`
    width: 100px;
    height: 50px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
        width: 80px;
        height: 40px;
        margin: 0 10px;
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 30px;
        margin: 0 5px;
    }
`;

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 50px;
    transition: all 0.3s ease;
    filter: brightness(0.7) grayscale(100%);
    
    &:hover {
        filter: brightness(1) grayscale(0%);
    }

    @media (max-width: 768px) {
        height: 40px;
    }

    @media (max-width: 480px) {
        height: 30px;
    }
`;
