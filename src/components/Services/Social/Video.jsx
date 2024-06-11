import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

const BackgroundVideoSection = () => {
  const [playing, setPlaying] = useState(false);

  const handleVideoClick = () => {
    setPlaying(!playing);
  };

  return (
    <div
      className="relative h-screen overflow-hidden flex items-center justify-center mt-6"
      onClick={handleVideoClick}
    >
      <ReactPlayer
        url="https://youtu.be/ZtiILy1lknc"
        loop
        playing={playing}
        muted
        controls={false}
        width="60%"
        height="60%"
        className="pointer-events-none"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      </div>
    </div>
  );
};

export default BackgroundVideoSection;
