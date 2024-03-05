import "react-image-gallery/styles/css/image-gallery.css";

import React, {useState} from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import striker from '../../media/quantum-striker-pose.png'
import q3 from '../../media/q3-visuals-logo-2.png'

const Preview = () => {

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

  const handleSlide = (index) => {
    setCurrentIndex(index);
    setPlaying(true); // Reset playing state on slide change
  };

    return (
        <div className="preview-container">

<h2>Whats inside</h2>
<h3>Here in an exclusive sneak peak at our
    wonderful program!
</h3>

<div className="carousel-and-descriptions">



            <ImageGallery style={{
  height:'500px'
}}
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />
        </div>
    )
}

export default Preview