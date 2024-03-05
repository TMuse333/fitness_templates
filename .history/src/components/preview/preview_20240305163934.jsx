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

    return (
        <div className="preview-container">
            <ImageGallery/>
        </div>
    )
}