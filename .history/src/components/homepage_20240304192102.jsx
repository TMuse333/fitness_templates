import React from "react";
import Herobanner from "./herobanner/herobanner";
import Navbar3 from "./navbar3/navbar3";
import About from "./about/about";
import Service from "./service/service";

const Homepage = () => {
    return (
        <>
        <div className="homepage">
            <Navbar3/>
     
            <Herobanner/>
            <About/>
            <Service/>
    
        </div>
        </>
    )

}

export default Homepage