import React from "react";
import './article2.css'
import goku from '../../media/goku-vs-jiren.jpg'
const Article2 = () => {


    return (
        <div className="article2-container">
           <h1>Name of you article here</h1>
           <p>This article is dropping some free
            game so listen up
           </p>
           <img src={goku}/>
           <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, assumenda fugit. Asperiores, itaque? Temporibus.</h1>
        </div>
    )
}

export default Article2