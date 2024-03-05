import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import dunk from '../../media/best_dunk.mp4';
import './herobanner.css';

const Herobanner = () => {
  const controls = useAnimation();

const animation = {
    initial:{

        y:-30
    },

    animate:{

    }
}

  return (
    <div className="herobanner-container">
      <video autoPlay muted loop className='herobanner-video'>
        <source src={dunk} type="video/mp4" />
      </video>
      <div className="herobanner-text"
    
       
      >
        <motion.h1
        initial={animation.initial}>
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
