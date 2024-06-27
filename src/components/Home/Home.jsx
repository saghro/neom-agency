import React from 'react';
import homeVideo from './homev.mp4';
 
const Home = () => {
    return (
        <div
            className="flex items-center justify-center h-screen bg-black"
        >
            <video
                src={homeVideo}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            >
            </video>
        </div>
    );
};
 
export default Home;