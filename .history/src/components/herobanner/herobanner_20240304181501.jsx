import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import dunk from '../../media/best_dunk.mp4';
import './herobanner.css';

const Herobanner = () => {
  const controls = useAnimation();

const animation = {
    initial:{
        x:0,
        y:-30
    }
}

  return (
    <div className="herobanner-container">
      <video autoPlay muted loop className='herobanner-video'>
        <source src={dunk} type="video/mp4" />
      </video>
      <motion.div className="herobanner-text"
      
        // initial={{ opacity: 0, y: -30, x:0 }}
        // animate={controls}
        // style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
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
