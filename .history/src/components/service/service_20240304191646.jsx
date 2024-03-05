import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  const animations = (index) => {
    const even = index % 2 === 0;

    return {
      initial: {
        x: even ? -20 : 20,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity:1
      },
    };
  };

  const items = ["Training details", "Training details", "Training details", "Training details"];

  return (
    <div className="service-container">
      <h2>Training Service</h2>
      <ul className="service-list">
        {items.map((item, index) => (
          <motion.li key={index} variants={animations(index)} initial="initial" animate="animate">
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
