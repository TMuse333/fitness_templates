import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import striker from '../../media/quantum-striker-pose.png';
import q3 from '../../media/q3-visuals-logo-2.png';
import './preview.css'

const Preview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  const text = [
    {
      name: 'Lorem Blitz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      name: 'Lorem Strike',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Lorem Core',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Lorem Cardio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];
  
  
  

  /*
   <ImageGallery
          style={{
           
             
          }}
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide}
        />
  */

  const images = [
    {
      original: q3,
      thumbnail: q3
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

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  

  return (
    <div className="preview-container">
    <h2>Whats inside</h2>
    <h3>Here in an exclusive sneak peek at our wonderful program!</h3>
  
    {isDesktop ? (
      <>
        <div className="carousel-description-container">
        <div className="details-box"
            >
          {text.slice(0, 2).map((item, index) => (
           
            <div className="program-details" key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
   
          ))}
                   </div>
          <div className="gallery-container">


          <ImageGallery
            style={{
              // Your styles here
            }}
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            onSlide={handleSlide}
          />
                    </div>
<div className="details-box">


                    {text.slice(-2).map((item, index) => (
            <div className="program-details" key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
          ))}
          </div>
        </div>
      </>
    ) : <>
        <div className="gallery-container">


<ImageGallery
  style={{
    // Your styles here
  }}
  items={images}
  showThumbnails={false}
  showPlayButton={false}
  showFullscreenButton={false}
  onSlide={handleSlide}
/>
          </div>

          {text.map((text,index) => (
            <div className="program-details"
            key={index}>
    <h2>{text.name}</h2>
                <p>{text.description}</p>
            </div>
          ))}


    </>
    
    }
  </div>
  )
  
};

export default Preview;
