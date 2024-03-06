import React from "react";
import './herobanner2.css'
import { Helmet } from "react-helmet";

const Herobanner2 = () => {

    return (
        <div className="herobanner2-container">

<Helmet>
                <title>Muhammad Bensalim Training</title>
                <meta name="description" content="Lorem ipsum dolor sit, amet consectetur adipisicing." />
                {/* Add more meta tags as needed */}
            </Helmet>
            <div className="hero2-text1">

          
            <h1>Muhammad Bensalim Training</h1>
            <p>Lorem, ipsum dolor.</p>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
            <button>
                Start Program
            </button>
            </div>
        </div>
    )
}

export default Herobanner2