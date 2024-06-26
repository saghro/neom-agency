import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import tof from '../../images/image (1).jpeg';
import tof2 from '../../images/image (3).jpeg';
import tof3 from '../../images/image (4).jpeg';
import tof4 from '../../images/image (5).jpeg';
import tof5 from '../../images/image (6).jpeg';
import tof6 from '../../images/image (7).jpeg';
import tof7 from '../../images/image (8).jpeg';
import tof8 from '../../images/image (9).jpeg';
import tof10 from '../../images/image (11).jpeg';
import tof11 from '../../images/image (12).jpeg';
import tof13 from '../../images/image (14).jpeg';
import tof14 from '../../images/image (15).jpeg';
import tof15 from '../../images/image (16).jpeg';
import tof16 from '../../images/image (17).jpeg';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

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
    <>
        <h1 className="mt-24 font-bold text-[#272D4E] text-5xl text-center">
            Nos Références & <span className="text-[#6A71B3]">Certifications</span>
        </h1>
        <Carousel
            responsive={responsive}
            ssr
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
            dotListClass="custom-dot-list-style mt-1"
            itemClass="custom-carousel-item"
            showDots
            arrows={false}
            className="mb-2"
        >
            {items.map(item => (
                <div
                    key={item.id}
                    className="flex justify-center items-center h-32 hover:scale-110 cursor-pointer mx-4 w-32 rounded-xl border border-gray-300 shadow-md"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Center the item
                >
                    <img className="mt-2" src={item.src} alt="" style={{ width: '80px', height: '60px' }} />
                </div>
            ))}
        </Carousel>
        <style jsx>{`
            .custom-carousel-item {
                width: calc(100% / 4); // This ensures 4 items are displayed at all times
                padding: 0 20px; // Add some padding to create space between items
            }
            .carousel-container {
                margin: 0 auto; // Center the carousel container
            }
        `}</style>
    </>
);

export default MultiCardCarousel;
