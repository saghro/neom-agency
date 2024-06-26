import React, { useEffect, useRef, useState } from "react";
import "./Confetti.css";

const Timeline = ({ setObserver, callback }) => {
  const [messages, setMessages] = useState(Array(7).fill(""));
  const timelines = useRef(Array(7).fill(null));
  const circles = useRef(Array(7).fill(null));

  const callbacks = [
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[0] = "Design personnalisé (iOS & Android)";
        return newMessages;
      });
      callback();
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[1] = "Console d’administration web ou mobile";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[2] = "Serveur d’hébergement";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[3] = "Mise en ligne de votre application mobile sur les stores";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[4] = "Fonctionnalité iOS et Android sur mesure";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[5] = "Référencement mobile (ASO) sur les App Store (Apple et Google)";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[6] = "Maintenance et mises à jour";
        return newMessages;
      });
    },
  ];

  useEffect(() => {
    timelines.current.forEach((timeline, index) => {
      setObserver(timeline);
    });
    circles.current.forEach((circle, index) => {
      setObserver(circle, callbacks[index]);
    });
  }, []);

  return (
    <div className="wrapper">
      {timelines.current.map((_, index) => (
        <React.Fragment key={index}>
          <div id={`timeline${index + 1}`} ref={(el) => (timelines.current[index] = el)} className="timeline" />
          <div className="circleWrapper">
            <div id={`circle${index + 1}`} ref={(el) => (circles.current[index] = el)} className="circle">
              {index + 1}
            </div>
            <div className="message" style={{ [index % 2 === 0 ? 'left' : 'right']: 'calc(100% + 20px)' }}>
              {messages[index]}
            </div>
            {/* <motion.img
              src={[ill1, ill2, ill3, ill4, ill5, ill6, ill7][index]}
              alt={`Illustration ${index + 1}`}
              className="floating-image"
              initial={{ y: -20 }}
              animate={{ y: 20 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut"
              }}
              style={{
                [index % 2 === 0 ? 'left' : 'right']: 'calc(100% + 20px)', 
                width: '100%', // 5 times bigger
                height: 'auto',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            /> */}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;