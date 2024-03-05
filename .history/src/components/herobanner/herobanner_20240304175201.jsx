import React from "react";
import dunk from '../../media/best_dunk.mp4';
import './herobanner.css';

const Herobanner = () => {
  return (
    <div className="herobanner-container">
      <video autoPlay muted className='herobanner-video'>
        <source src={dunk} type="video/mp4" />
      </video>
    </div>
  );
};

export default Herobanner;
