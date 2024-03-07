import React, { useState } from 'react';
// import './ProductCarousel.css'; // You can style your carousel
import abu6 from '../../media/aboubacar-6.jpg'
import abu5 from '../../media/aboubacar-5-fire.png'
import striker from '../../media/quantum-striker-pose.png'
const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextProducts = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < products.length ? prevIndex + 1 : 0
    );
  };

  const showPrevProducts = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 3
    );
  };

  const products = [
    {
        image:striker,
        name:'the striker',
        description:'the quantum realm is strong'
    }
  ]

  return (
    <div className="product-carousel">
      <div className="carousel-container">
        {products.slice(currentIndex, currentIndex + 3).map((product, index) => (
          <div key={index} className="product-item">
            {/* Render your product details */}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

      <button className="arrow-button" onClick={showPrevProducts}>
        &lt; {/* Left arrow */}
      </button>
      <button className="arrow-button" onClick={showNextProducts}>
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ProductCarousel;
