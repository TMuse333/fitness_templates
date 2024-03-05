import React from "react";
import dunk from '../../media/best_dunk.mp4';
import './herobanner.css';
import { motion } from "framer-motion";

const Herobanner = () => {
  return (
    <div className="herobanner-container">
      <video autoPlay muted loop className='herobanner-video'>
        <source src={dunk} type="video/mp4" />
      </video>
      <div className="herobanner-text">
        <motion.h1>
            Thomas Musial
        </motion.h1>
        <motion.p>
            Optimize yourself with the quantum realm
        </motion.p>
      </div>
    </div>
  );
};

export default Herobanner;
