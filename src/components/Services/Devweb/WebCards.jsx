import React, { useState } from "react";
import TimelineObserver from "react-timeline-animation";
import Timeline from "./Confetti"; // Updated import to reflect the correct file
import "./Confetti.css";

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
      <h3 className="mb-4 text-5xl font-bold header-gradient text-center">Nos Services</h3>
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