import React, { useState } from "react";
import TimelineObserver from "react-timeline-animation";
import Timeline from "./Confetti";
import "./Confetti.css";

export default function WebCards() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col items-center justify-center my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card
          title="UI/UX design"
          description="Un design attrayant et des visuels modernes et créatifs pour capter l’attention des visiteurs."
          icon={<FaPaintBrush />}
        />
        <Card
          title="Développement web et mobile"
          description="Après une analyse de l’ensemble de vos besoins, nous sélectionnons les outils les plus adaptés à vos objectifs."
          icon={<FaLaptopCode />}
        />
        <Card
          title="Maintenance des sites web et des applications"
          description="Correction des bugs, mettre à jour de nouvelles fonctionnalités, et surveillance de la sécurité."
          icon={<FaCog />}
        />
        <Card
          title="Déploiement"
          description="Déployer un site web par métier, par zone géographique, ou sur l’ensemble du système."
          icon={<FaCloudUploadAlt />}
        />
      </div>
      <button className="mt-8 px-8 py-3 bg-[#C7A2CB] border-2 hover:border-[#C7A2CB] text-white rounded-full hover:bg-white hover:text-[#C7A2CB] transition duration-300">
        Vous avez un Projet?
      </button>
=======
    <div className="App pt-20">
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
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e
    </div>
  );
};

<<<<<<< HEAD
export default WebCards;
=======
>>>>>>> fc1b2c52d8d33776a7a2d03e32a4e86d9b5d170e
