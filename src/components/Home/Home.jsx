import React from 'react';

const Home = () => {
    return (
        <div
            className="flex items-center justify-center h-screen bg-black"
        >
            <video
                src="../../assests/homev.mp4"
                controls
                autoPlay
                loop
                className="w-full h-full object-cover"
            >
            </video>
        </div>
    );
};

export default Home;
