import React, { useState } from 'react';
// import './ProductCarousel.css'; // You can style your carousel
import abu6 from '../../media/aboubacar-6.jpg'
import abu5 from '../../media/aboubacar-5-fire.png'
import striker from '../../media/quantum-striker-pose.png'
const ProductCarousel = ({ productsl }) => {
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
    },
    {
        image:abu5,
        name:'Abu flex',
        description:'the quantum realm is strong'
    },
    {
        image:abu6,
        name:'Abu flex',
        description:'the quantum realm is strong'
    },

  ]

  return (
   <div className='product-carousel-container'>

    
   </div>
  );
};

export default ProductCarousel;
