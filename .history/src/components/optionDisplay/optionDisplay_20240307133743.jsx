import React, { useState } from 'react';
import './optionDisplay.css'
import abu6 from '../../media/aboubacar-6.jpg'
import abu5 from '../../media/aboubacar-5-fire.png'
import striker from '../../media/quantum-striker-pose.png'
const ProductCarousel = ({ productsl }) => {




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
        left: '0%',
        transform:'translateX(-50%)'
    },
    {
        left: '50%',
        transform:'translateX(-50%)'
    },
    {
        left: '100%',
        transform:'translateX(-50%)'
    },
  ]

  return (
   <div className='product-carousel-container'>

<button className='carousel-button'>
    prev
</button>
<button className='carousel-button'>
    next
</button>

<div className='products-row'>


    {products.map((product,index) => (
        <div className='product'
        style={{ left: positions[index].left, transform: positions[index].transform }}>
<img src={product.image}/>
<p>The product</p>
            </div>
    ))}
    </div>

   </div>
  );
};

export default ProductCarousel;
