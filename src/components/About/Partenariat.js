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
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
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

const MultiCardCarousel = () => {
    const items = [
        { id: 1, content: <img className='mt-8' src={tof} alt="" /> },
        { id: 3, content: <img className='mt-14' src={tof2} alt="" /> },
        { id: 4, content: <img className='mt-5' src={tof3} alt="" /> },
        { id: 5, content: <img className='mt-12' src={tof4} alt="" /> },
        { id: 6, content: <img className='mt-6' src={tof5} alt="" /> },
        { id: 7, content: <img className='mt-6' src={tof6} alt="" /> },
        { id: 8, content: <img className='mt-8' src={tof7} alt="" /> },
        { id: 9, content: <img className='mt-7' src={tof8} alt="" /> },
        { id: 11, content: <img className='mt-5' src={tof10} alt="" /> },
        { id: 12, content: <img className='mt-12' src={tof11} alt="" /> },
        { id: 14, content: <img className='mt-6' src={tof13} alt="" /> },
        { id: 15, content: <img className='mt-8' src={tof14} alt="" /> },
        { id: 16, content: <img className='mt-7' src={tof15} alt="" /> },
        { id: 17, content: <img className='mt-14' src={tof16} alt="" /> },
    ];

    return (
        <>
            <h1 className="mt-24 font-bold text-[#272D4E] text-5xl text-center">Partenariat & <span className="text-[#ff997f]">Certifications</span></h1>
            <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
                dotListClass="custom-dot-list-style mt-8"
                itemClass="carousel-item-padding-40-px mb-6"
                showDots={true}
                arrows={false}
                className='mb-6'
            >
                {items.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-center items-center h-48 mt-24 hover:scale-110 cursor-pointer mb-12 w-36 rounded-xl border border-gray-300 shadow shadow-gray-500 shadow-md mx-auto"
                    >
                        {item.content}
                    </div>

                ))}
            </Carousel>
        </>
    );
};

export default MultiCardCarousel;
