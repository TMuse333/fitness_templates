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
import striker from '../media/quantum-striker-pose.png'
import Content from "./content/content";
import HydroList from "./hydrolist/hydrolist";
import q3 from '../media/q3-visuals-logo-2.png'
import Footer from "./footer/footer";

const Homepage = () => {

    const links = [
        {
            dest:'programs',
            name:'Programs'
        },
        {
            dest:'about',
            name:'About'
        },
        {
            dest:'contact'
        }
    ]
    return (
        <>
        <div className="homepage">
            <Navbar3/>
     
            <Herobanner/>
            <About/>
         <ServiceOffering/>
         <Content
            image={striker}
            hasAnimation={true}
           customText={<HydroList
           text={designAdvantages2}
           intro={hydrolistIntro2}
           absolute={true}/>
           }/>

<Content
            image={q3}
            hasAnimation={true}
            rev={true}
           customText={<HydroList
           text={designAdvantages2}
           intro={hydrolistIntro2}
           absolute={true}
         />
           }/>

           <Footer/>

    
        </div>
        </>
    )

}

export default Homepage