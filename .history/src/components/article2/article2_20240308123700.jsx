import React from "react";
import './article2.css'
import goku from '../../media/goku-vs-jiren.jpg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCarousel from "../optionDisplay/optionDisplay";
const Article2 = () => {


    return (
        <div className="article2-container">
           <h1>Name of you article here</h1>
           <p>This article is dropping some free
            game so listen up
           </p>
           <div className="article-image-button-container">
            <div className="article-buttons">

  
<button className="article2-button">
<FiChevronLeft/> 
</button>
<div>Burger</div>
<button className="article2-button">
    <FiChevronRight/>
</button>
</div>
         
           <img src={goku}
           className='article2-image'/>
           </div>
           <section className="article2-section">


           <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt.</h1>
           <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, asperiores sed ipsam molestias ab architecto? Reprehenderit possimus quaerat iste repellendus ab optio temporibus qui ad, ipsa, aliquid nihil aliquam. Sit consequatur tempore voluptatem. Dignissimos adipisci odio sequi earum doloremque nemo?
           </p>
           </section>

           <h2 style={{
            margin
           }}
           >Other articles</h2>

            <ProductCarousel/>
        </div>
    )
}

export default Article2