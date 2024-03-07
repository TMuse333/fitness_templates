import React, { useState, useEffect } from 'react';
import './optionDisplay.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import striker from '../../media/quantum-striker-pose.png';
import vegeta from '../../media/vegeta-battle.png';

const ProductCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(null);

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



  const handlePrevClick = () => {
    setCurrentPosition((prevPosition) => {
      const newPosition = prevPosition === 0 ? positions.length - 1 : prevPosition - 1;
      console.log(`Clicked Prev - Position: ${newPosition}`);
      return newPosition;
    });
    setButtonClicked('prev');
  };
  
  const handleNextClick = () => {
    setCurrentPosition((prevPosition) => {
      const newPosition = (prevPosition + 1) % positions.length;
      console.log(`Clicked Next - Position: ${newPosition}`);
      return newPosition;
    });
    setButtonClicked('next');
  };

  const centeredIndex = positions.findIndex(
    (position) => position.left === '50%'
  );

  // Log the src of the centered image
  console.log("Centered Image Src:", products[centeredIndex].image);

  const productStyles = products.map((product, index) => {
    const isCentered = positions[(currentPosition + index) % positions.length].left === '50%';

    return {
      left: positions[(currentPosition + index) % positions.length].left,
      transform: `${
        positions[(currentPosition + index) % positions.length].transform
      } ${isCentered ? 'scale(1.2)' : ''}`,
      filter: isCentered ? 'none' : 'brightness(55%)',
      transition: `${positions[(currentPosition + index) % positions.length].transition}, left 0.5s ease, transform 0.5s ease`,
    };
  });

  return (
    <div className="product-carousel-container">
      <div className="products-row">
        <button className="carousel-button" onClick={handlePrevClick}>
          <FiChevronLeft />
        </button>
        {products.map((product, index) => (
          <div
            key={index}
            className="product"
            style={{
              left: productStyles[index].left,
              transform: productStyles[index].transform,
              filter: productStyles[index].filter,
              transition: productStyles[index].transition,
            }}
          >
            <img
              src={product.image}
              alt={`Product ${index + 1}`}
              key={index}
              // onMouseEnter={()=>handleMouseEnter((currentPosition + 1) % positions.length)}
           
            />
            <div
              style={{
                opacity: positions[(currentPosition + index) % positions.length].left !== '50%' ? '0' : '1',
                transition: 'opacity 0.5s ease 0.5s',
              }}
            ></div>
          </div>
        ))}
        <button className="carousel-button right" onClick={handleNextClick}>
          <FiChevronRight />
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ProductCarousel;
