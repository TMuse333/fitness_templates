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
      <div className=""
    </div>
  );
};

export default Herobanner;
