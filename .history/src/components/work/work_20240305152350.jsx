import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import './work.css'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "../../data/data";
import striker from '../../media/quantum-striker-pose.png'
import q3 from '../../media/q3-visuals-logo-2.png'

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);



const images = [
  {
    original:q3,
    thumbnail:q3
  },
  {
    original: striker,
    thumbnail: striker,

  },

  // Add more images as needed
];


portfolio[0].link = 'https://saineymedia.com'
portfolio[1].link =  'https://thomasmusial.netlify.app'



  const handleSlide = (index) => {
    setCurrentIndex(index);
    setPlaying(true); // Reset playing state on slide change
  };

  const handleVideoPause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    setPlaying(true); // Autoplay the first video
  }, []);

  return (
    <div className="work-container">
      <h2 className="title-text bold-700">Creating digital excellence.</h2>
      <p className="description-text">
        Creating digital excellence with every pixel and line of code. Here is some of our work
      </p>

      {/* <Link to='/portfolio'>
        <button className="button work-button">explore portfolio</button>
      </Link> */}

      <div className="image-text-box work">

    


<ImageGallery style={{
  height:'500px'
}}
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />
       

       <div className="work-description">
  <AnimatePresence>
    <motion.p
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.7 } }}
      exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
      className="description-text"
    >
         {portfolio[currentIndex].description}
      <Link to={portfolio[currentIndex].link}>
       
        <br />
        <button
        style={{
          marginTop:'2rem'
        }}
          className="button work-link"
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7 } }}
          exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
        >
          View
        </button>
      </Link>
    </motion.p>
  </AnimatePresence>
</div>

       
      </div>
    </div>
  );
};

export default WorkCarousel;