import React, { useState } from 'react';
import './optionDisplay.css';
import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import striker from '../../media/quantum-striker-pose.png';
import vegeta from '../../media/vegeta-battle.png';

const ProductCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
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
    const angle = (index / products.length) * 360;
    const radius = 100;
    const centerX = 50;
    const centerY = 50;

    return {
      left: `${index * 50}%`,
      transform: `translateX(-50%) `,
    };
  });

  const handlePrevClick = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition === 0 ? positions.length - 1 : prevPosition - 1
    );
    setButtonClicked('left');
  };

  const handleNextClick = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % positions.length);
    setButtonClicked('right');
  };

  const handleTransitionEnd = () => {
    setButtonClicked(null);
  };

  return (
    <div className="product-carousel-container">
      <button className="carousel-button" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="carousel-button" onClick={handleNextClick}>
        Next
      </button>
      <div className="products-row">
        {products.map((product, index) => (
          <div
            key={index}
            className="product"
            style={{
              left: positions[(currentPosition + index) % positions.length].left,
              transform: positions[(currentPosition + index) % positions.length].transform,
              transition:
                buttonClicked ||buttonClicked === 'left'
                  ? 'left 0.5s ease, transform 0.5s ease'
                  : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            <img src={product.image} alt={`Product ${index + 1}`} />
            <div
              style={{
                opacity: positions[(currentPosition + index) % positions.length].left !== '50%' ? '0' : '1',
                transition: 'opacity 0.5s ease 0.5s',
              }}
            >
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
