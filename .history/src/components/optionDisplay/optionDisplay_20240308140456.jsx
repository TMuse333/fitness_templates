import React, { useState, useEffect } from 'react';
import './optionDisplay.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import striker from '../../media/quantum-striker-pose.png';
import vegeta from '../../media/vegeta-battle.png';

const ProductCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(null);

  const [positions, setPositions] = useState(
    Array.from({ length: 4 }, (_, index) => ({
      left: `${index * 50}%`,
      transform: `translateX(-50%)`,
      transition: 'transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
      animation: index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : index === 3 ? 'forth' :'none',
    }))
  );

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4, // Adjust the threshold as needed
  });

  const controls = useAnimation();

  useEffect(() => {
    // Trigger the animation when the element is in view
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { duration: 0.5 }, // Adjust the duration for the y transition
        opacity: { delay: 0.4, duration: 0.5 }, // Add delay for the opacity transition
      },
    },
  };

  co

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

  useEffect(() => {
    // Find the index of the centered image based on the left position being '50%'
    const centeredIndex = positions.findIndex(
      (position) => position.left === '50%'
    );

    // Log the src of the centered image
    console.log('Centered Image Src:', products[centeredIndex].image);
  }, [positions, products, currentPosition]);

  const shiftPositions = (direction) => {
    // Shift all positions circularly based on the specified direction
    const shiftedPositions = positions.map((position, index) => {
      const newIndex =
        direction === 'right'
          ? (index - 1 + positions.length) % positions.length
          : (index + 1) % positions.length;
      return positions[newIndex];
    });

    // Update the positions array
    setCurrentPosition((prevPosition) =>
      direction === 'right'
        ? (prevPosition + 1) % positions.length
        : prevPosition === 0
        ? positions.length - 1
        : prevPosition - 1
    );
    setButtonClicked(direction);
    setPositions(shiftedPositions
        );
  };

  const handlePrevClick = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition === 0 ? positions.length - 1 : prevPosition - 1
    );
    shiftPositions('left');
  };

  const handleNextClick = () => {
    setCurrentPosition((prevPosition) =>
      (prevPosition + 1) % positions.length
    );
    shiftPositions('right');
  };

  const productStyles = products.map((product, index) => {
    const isCentered =
      positions[(currentPosition + index) % positions.length].left === '50%';

    return {
      left: positions[(currentPosition + index) % positions.length].left,
      transform: `${
        positions[(currentPosition + index) % positions.length].transform
      } ${isCentered ? 'scale(1.2)' : ''}`,
      filter: isCentered ? 'none' : 'brightness(55%)',
      transition: `left 0.5s ease, transform 0.5s ease`,
      opacity: !isCentered ? 0 : 1,
    };
  });

  return (
    <div className="product-carousel-container" ref={ref}>
      <div className="products-row">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="product"
            animate={controls}
            initial="hidden"
            variants={variants}
            style={{
              left: productStyles[index].left,
              transform: productStyles[index].transform,
              filter: productStyles[index].filter,
              transition: 'left 0.3s ease-in, transform 0.3s ease-in',
              opacity: productStyles[index].opacity,
            }}
          >
            <div className="image-button-container">
              <button
                className="carousel-button"
                onClick={handlePrevClick}
                style={{
                  opacity: productStyles[index].opacity,
                }}
              >
                <FiChevronLeft />
              </button>
              <img
                src={product.image}
                alt={`Product ${index + 1}`}
                key={index}
              />
              <button
                className="carousel-button right"
                onClick={handleNextClick}
                style={{
                  opacity: productStyles[index].opacity,
                }}
              >
                <FiChevronRight />
              </button>
            </div>
            <div
              style={{
                opacity:
                  positions[(currentPosition + index) % positions.length]
                    .left !== '50%'
                    ? '0'
                    : '1',
                transition: 'opacity 0.5s ease 0.5s',
              }}
            ></div>
          </motion.div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductCarousel;
