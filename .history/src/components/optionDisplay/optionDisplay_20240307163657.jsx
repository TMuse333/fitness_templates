import React, { useState,useEffect } from 'react';
import './optionDisplay.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';




import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import striker from '../../media/quantum-striker-pose.png';
import vegeta from '../../media/vegeta-battle.png';

const ProductCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(null);

  const [hovered, setIsHovered ] = useState(null)

  useEffect(() => {
    // Empty useEffect
  }, []);
  

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  const products = [
    {
      image: striker,
      name: 'the striker',
      description: 'the quantum realm is strong',
    },
    {
      image: abu5,
      name: 'Abu fire',
      description: 'Aboubacar flexing with the fire',
    },
    {
      image: abu6,
      name: 'Abu flex',
      description: 'Flexing at glenbourne',
    },
    {
      image: vegeta,
      name: 'Vegeta',
      description: 'Be a proud warrior like Vegeta',
    },
  ];

  const positions = Array.from({ length: products.length }, (_, index) => {
  
  
    return {
      left: `${index * 50}%`,
      transform: `translateX(-50%)`,
     
      transition: 'transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
    };
  });

  const handleMouseEnter = (index) => {
    setIsHovered((index) )
  }
  

  const handlePrevClick = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition === 0 ? positions.length - 1 : prevPosition - 1
    );
  };

  const handleNextClick = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % positions.length);
  };

 
  


  return (
    <div className="product-carousel-container">
      <button className="carousel-button" onClick={handlePrevClick}>
     
      </button>
    
      <div className="products-row">
      <button className="carousel-button" onClick={handleNextClick}>
      <FiChevronLeft />
      </button>
        {products.map((product, index) => (
          <div
            key={index}
            className="product"
            style={{
                left: positions[(currentPosition + index) % positions.length].left,
                transform: `${
                    positions[(currentPosition + index) % positions.length].transform
                  } ${positions[(currentPosition + index) % positions.length].left ===
                  '50%' ? 'scale(1.2)' : ''}`,
              
                transition: positions[(currentPosition + index) % positions.length].transition + ', left 0.5s ease, transform 0.5s ease',
              }}
           
           
          >
            <img 
            src={product.image}
             alt={`Product ${index + 1}`}
            key={index}
            // onMouseEnter={()=>handleMouseEnter((currentPosition + 1) % positions.length)}
            

                

            onMouseLeave={()=>handleMouseLeave()} />
            <div
              style={{
                opacity: positions[(currentPosition + index) % positions.length].left !== '50%' ? '0' : '1',
                transition: 'opacity 0.5s ease 0.5s',
              }}
            >
             
            </div>
          </div>
        ))}
         <FiChevronRight />
         
      </div>
      
    </div>
  );
};

export default ProductCarousel;
