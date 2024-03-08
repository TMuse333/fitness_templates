import React, {useEffect} from "react";
import './article2.css'
import goku from '../../media/goku-vs-jiren.jpg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCarousel from "../optionDisplay/optionDisplay";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Article2 = () => {
  const controls = useAnimation();
  const [ref, inView] = const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5, // Adjust the threshold value as needed (e.g., 0.7 for 70% visibility)
  });

  // Animation variant for the fade-in effect
  const fadeInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  // Trigger the animation when the element is in view
  useEffect(() => {
    // Trigger the animation when the element is in view
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="article2-container">
      <h1>Name of your article here</h1>
      <p className="article2-intro">This article is dropping some free game so listen up</p>
      <div className="article-image-button-container">
        <div className="article-buttons"></div>
        <img src={goku} className='article2-image' />
      </div>

      <section className="article2-section">
        <motion.h1 ref={ref}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt.</motion.h1>
        <motion.p
          ref={ref}
          variants={fadeInVariant}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, asperiores sed ipsam molestias ab
          architecto? Reprehenderit possimus quaerat iste repellendus ab optio temporibus qui ad, ipsa, aliquid nihil
          aliquam. Sit consequatur tempore voluptatem. Dignissimos adipisci odio sequi earum doloremque nemo?
        </motion.p>
      </section>

      <h2 style={{ marginBottom: '-5rem' }}>Other articles</h2>

      <ProductCarousel />
    </div>
  );
}

export default Article2;
