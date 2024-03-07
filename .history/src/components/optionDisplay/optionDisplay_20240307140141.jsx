import React, { useState } from 'react';
import './optionDisplay.css';
import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import striker from '../../media/quantum-striker-pose.png';
import vegeta from '../../media/vegeta-battle.png'

const ProductCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

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
        image:vegeta,
        name:'Vegeta',
        description:'Be a proud warrior like Vegeta'
    }
  ];

  const positions = Array.from({ length: products.length }, (_, index) => ({
    left: `${index * 50}%`,
    transform: 'translateX(-50%)',
  }));

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
                transition: positions[(currentPosition + index) % positions.length].left !== '0%' && positions[(currentPosition + index) % positions.length].left !== `${(positions.length - 1) * 50}%` ? 'left 0.5s ease, transform 0.5s ease' : 'none',
              }}
              
          >
            <img src={product.image} alt={`Product ${index + 1}`} />
            <div
            style={{
                opacity: positions[(currentPosition)]
            }}>
             
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
