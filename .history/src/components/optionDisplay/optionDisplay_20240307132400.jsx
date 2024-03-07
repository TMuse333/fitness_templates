import React, { useState } from 'react';
import './optionDisplay.css'
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

  const positions = [
    {
        left: '50%'
    }
  ]

  return (
   <div className='product-carousel-container'>

<div className='products-row'>


    {products.map((product,index) => (
        <div className='product'>
<img src={product.image}/>
<p>The product</p>
            </div>
    ))}
    </div>
   </div>
  );
};

export default ProductCarousel;
