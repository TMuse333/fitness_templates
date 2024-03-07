import React from "react";
import './article2.css'
import goku from '../../media/goku-vs-jiren.jpg'
const Article2 = () => {


    return (
        <div className="article2-container">
           <h1>Name of you article here</h1>
           <p>This article is dropping some free
            game so 
           </p>
           <img src={goku}/>
        </div>
    )
}

export default Article2