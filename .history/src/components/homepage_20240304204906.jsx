import React from "react";
import Herobanner from "./herobanner/herobanner";
import Navbar3 from "./navbar3/navbar3";
import About from "./about/about";
import Service from "./service/service";
import ServiceOffering from "./serviceOffering/serviceOffering";
import {designAdvantages,
    designAdvantages2,
project1,
project2,
hydrolistIntro1,
hydrolistIntro2,cardGameIntro,
q3Tactics
,cardGameDesc,q3Intro} from '../data/data'

const Homepage = () => {
    return (
        <>
        <div className="homepage">
            <Navbar3/>
     
            <Herobanner/>
            <About/>
         <ServiceOffering/>
         <Content
            image={q3logo}
            hasAnimation={true}
           customText={<HydroList
           text={designAdvantages2}
           intro={hydrolistIntro2}
           absolute={true}/>
           }/>

    
        </div>
        </>
    )

}

export default Homepage