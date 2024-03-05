import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Service = () => {
  const containerRef = useRef(null);

  const animations = {
    initial: {
      x: -20,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const items = ["Training details", "Training details", "Training details", "Training details"];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top  < window.innerHeight ;
        if (isVisible) {
          containerRef.current.classList.add("in-view");
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`service-container`} ref={containerRef}>
      <h2>Training Service</h2>
      <ul className="service-list">
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={animations}
            initial={{ x: -20, opacity: 0 }}
            animate={containerRef.current?.classList.contains("in-view") ? "animate" : "initial"}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
