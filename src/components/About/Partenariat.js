import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import tof from '../../images/acc2.jpeg';
import tof1 from '../../images/acc3.jpeg';
import tof2 from '../../images/logo.jpeg';
import tof3 from '../../images/logo.jpeg';
import tof4 from '../../images/acc3.jpeg';
import tof5 from '../../images/acc3.jpeg';  // Add your new images
import tof6 from '../../images/acc2.jpeg';  // Add your new images

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
        { id: 2, content: <img className='mt-7' src={tof1} alt="" /> },
        { id: 3, content: <img className='mt-14' src={tof2} alt="" /> },
        { id: 4, content: <img className='mt-5' src={tof3} alt="" /> },
        { id: 5, content: <img className='mt-12' src={tof4} alt="" /> },
        { id: 6, content: <img className='mt-6' src={tof5} alt="" /> },  // New images
        { id: 7, content: <img className='mt-6' src={tof6} alt="" /> }   // New images
    ];

    return (
        <>
            <h1 className="mt-6 font-bold text-[#272D4E] text-3xl text-center">Partenariat & <span className="text-[#ff997f]">Certifications</span></h1>
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
                    <div key={item.id} className="h-48 mt-12 hover:scale-110 cursor-pointer mb-8 w-36 rounded-xl border border-gray-300 shadow shadow-gray-500 shadow-md ml-16">
                        {item.content}
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default MultiCardCarousel;
