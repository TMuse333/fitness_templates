import React from "react";
import Herobanner from "./herobanner/herobanner";
import Navbar3 from "./navbar3/navbar3";
import About from "./about/about";
import Service from "./service/service";
import ServiceOffering from "./serviceOffering/serviceOffering";

const Homepage = () => {
    return (
        <>
        <div className="homepage">
            <Navbar3/>
     
            <Herobanner/>
            <About/>
         <ServiceOffering/>
         
    
        </div>
        </>
    )

}

export default Homepage