import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Service = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".service-container");

      if (element) {
        const elementTop = element.getBoundingClientRect().top;

        // Adjust the threshold based on when you want the animation to start
        if (elementTop < window.innerHeight * 0.75) {
          controls.start({
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Adjust the stagger duration as needed
            },
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div className="service-container" initial={{ opacity: 0 }} animate={controls}>
      <h2>Training Service</h2>
      <motion.ul className="service-list" variants={{}}>
        <motion.li variants={{ opacity: 0, x: -20 }}>Training details</motion.li>
        <motion.li variants={{ opacity: 0, x: 20 }}>Training details</motion.li>
        <motion.li variants={{ opacity: 0, x: -20 }}>Training details</motion.li>
        <motion.li variants={{ opacity: 0, x: 20 }}>Training details</motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Service;
