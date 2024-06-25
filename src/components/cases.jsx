import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './cases.css'; 

const Cases = ({ imageSrc, title, text }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const calculateTilt = () => {
    const centerX = 128; // Half of the width (256 / 2)
    const centerY = 128; // Half of the height (256 / 2)
    const deltaX = mousePosition.x - centerX;
    const deltaY = mousePosition.y - centerY;
    const maxTilt = 25; // Increased maximum tilt angle in degrees

    const tiltX = (deltaY / centerY) * maxTilt;
    const tiltY = -(deltaX / centerX) * maxTilt;

    return { tiltX, tiltY };
  };

  const { tiltX, tiltY } = calculateTilt();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 ">
      <div className="flex flex-col justify-start p-4 bg-white shadow-lg rounded-lg w-64 h-64 text-center mt-4 mb-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Cases;