import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TimelineObserver from "react-timeline-animation";
import "./Points.css";

// import ill1 from '../../../images/ill1.png';
// import ill2 from '../../../images/ill2.png';
// import ill3 from '../../../images/ill3.png';
// import ill4 from '../../../images/ill4.png';
// import ill5 from '../../../images/ill5.png';
// import ill6 from '../../../images/ill6.png';

const Timeline = ({ setObserver, callback }) => {
  const [messages, setMessages] = useState(Array(6).fill(""));
  const timelines = useRef(Array(6).fill(null));
  const circles = useRef(Array(6).fill(null));
  const [inView, setInView] = useState(Array(6).fill(false));

  const callbacks = [
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[0] = "Accompagnement marketing ";
        return newMessages;
      });
      callback();
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[1] = "Étude de marché ";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[2] = "Stratégie médias sociaux.";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[3] = "Plan d’action marketing  ";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[4] = "Stratégie numérique";
        return newMessages;
      });
    },
    () => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[5] = "Veille concurrentielle ";
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
      setTimeout(() => setInView(prev => {
        const newInView = [...prev];
        newInView[index] = true;
        return newInView;
      }), 1000 * index); 
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
              {/* <motion.img
                
                alt={`Illustration ${index + 1}`}
                className={`floating-image ${index % 2 === 0 ? 'right-aligned' : 'left-aligned'}`}
                initial={{ opacity: 0 }}
                animate={inView[index] ? { opacity: 1, y: [20, -20, 20] } : { opacity: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut"
                }}
              /> */}
              {messages[index]}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;