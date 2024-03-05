import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import dunk from '../../media/best_dunk.mp4';
import './herobanner.css';

const Herobanner = () => {
  const controls = useAnimation();

  useEffect(() => {
    const fadeInAnimation = async () => {
      // Wait for 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Trigger the fade-in animation
      controls.start({ opacity: 1, y: 0,x:-100 });
    };

    fadeInAnimation();
  }, [controls]);

  return (
    <div className="herobanner-container">
      <video autoPlay muted loop className='herobanner-video'>
        <source src={dunk} type="video/mp4" />
      </video>
      <motion.div className="herobanner-text"
        initial={{ opacity: 0, y: -30, x:-100 }}
        animate={controls}
        style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <motion.h1>
          Thomas Musial
        </motion.h1>
        <motion.p>
          Optimize yourself with the quantum realm
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Herobanner;
