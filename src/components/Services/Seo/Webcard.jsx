// import React from 'react';
// import Slider from "react-slick";
// import { RiBodyScanFill } from "react-icons/ri";
// import { IoEyeSharp } from "react-icons/io5";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const WebCards = () => {
//   const Cards = ({ title, description, icon }) => {
//     return (
//       <div className="max-w-sm overflow-hidden shadow-lg bg-white transform transition duration-300 hover:bg-gradient-to-r from-[#6A71B3] to-[#A8D9E0] hover:text-white flex flex-col justify-between rounded-full p-4">
//         <div className="flex items-center justify-center h-24 w-24 bg-gradient-to-r from-[#C7A2CB]  rounded-full mb-4 mx-auto">
//           {icon}
//         </div>
//         <div className="font-bold text-xl sm:text-2xl mb-2 text-center">{title}</div>
//         <p className="text-base sm:text-lg text-center">
//           {description}
//         </p>
//         <div className="h-12 mt-6 cursor-pointer hover:scale-105 w-24 rounded-full bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5 mx-auto">
//           <div className="flex h-full w-full items-center rounded-full justify-center bg-white">
//             <h1 className="text-1xl text-black">Savoir plus</h1>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center my-8">
//       <h1 className="text-3xl font-bold font-Rammetto-One bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] text-transparent bg-clip-text mt-8 text-center">
//         Nous créons les éléments visuels et messages qui capturent.
//       </h1>

//       <Slider {...settings} className="w-full mt-8">
//         <Cards
//           title="Accompagnement"
//           description="Accompagnement marketing"
//           icon={<RiBodyScanFill className="text-white text-4xl" />}
//         />
//         <Cards
//           title="Étude"
//           description="Étude de marché"
//           icon={<IoEyeSharp className="text-white text-4xl" />}
//         />
//         <Cards
//           title="médias sociaux"
//           description="Stratégie médias sociaux"
//           icon={<IoEyeSharp className="text-white text-4xl" />}
//         />
//         <Cards
//           title="Référencement SEA"
//           description="Stratégie medias"
//           icon={<IoEyeSharp className="text-white text-4xl" />}
//         />
//         <Cards
//           title="Plan"
//           description="Plan d’action marketing"
//           icon={<IoEyeSharp className="text-white text-4xl" />}
//         />
//         <Cards
//           title="Stratégie"
//           description="Stratégie numérique"
//           icon={<IoEyeSharp className="text-white text-4xl" />}
//         />
//         <Cards
//           title="Veille concurrentielle"
//           description="Veille concurrentielle"
//           icon={<IoEyeSharp className="text-white text-4xl" />}
//         />
//       </Slider>

//       <div className="h-12 mt-6 cursor-pointer hover:scale-105 w-60 rounded-full bg-gradient-to-r from-[#C7A2CB] via-[#A8D9E0] to-[#6A71B3] p-0.5 mt-8">
//         <div className="flex h-full w-full items-center rounded-full justify-center bg-white">
//           <h1 className="text-1xl text-black">Vous avez un projet?</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebCards;



import React, { useState } from "react";
import TimelineObserver from "react-timeline-animation";
import Timeline from "./Points"; // Updated import to reflect the correct file
import "./Points.css";
 
export default function WebDev() {
  const [message, setMessage] = useState("");
 
  const onCallback = () => {
    console.log("awesome");
  };
 
  return (
    <div className="Drop pt-20">
      <style>
        {`
          .header-gradient {
            background: linear-gradient(to right, #A8D9E0, #C7A2CB, #6A71B3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .fill-gradient {
            background: linear-gradient(116deg, #A8D9E0, #C7A2CB, #6A71B3);
            background-size: 600% 600%;
            animation: fillAnimation 6s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          @keyframes fillAnimation {
            0% { background-position: 0% 30%; }
            50% { background-position: 100% 71%; }
            100% { background-position: 0% 30%; }
          }
        `}
      </style>
      <h3 className="mb-4 text-5xl font-bold header-gradient">Nos Services</h3>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#C7A2CB"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline fill-gradient"
            setObserver={setObserver}
          />
        )}
      />
      <div className="mb-32">{message}</div>
    </div>
  );
}