import React from "react";
import Herobanner from "../components/herobanner/herobanner";
import Navbar3 from "../components/navbar3/navbar3";
import About from "../components/about/about";
import Service from "../components/service/service";
import ServiceOffering from "../components/serviceOffering/serviceOffering";
import {designAdvantages,
    designAdvantages2,
project1,
project2,
hydrolistIntro1,
hydrolistIntro2,cardGameIntro,
q3Tactics
,cardGameDesc,q3Intro} from '../data/data'
import striker from '../media/quantum-striker-pose.png'
import Content from "../components/content/content";
import HydroList from "../components/hydrolist/hydrolist";
import q3 from '../media/q3-visuals-logo-2.png'
import Footer from "../components/footer/footer";
import Testimonials from "../components/testimonials/testimonials";
import WorkCarousel from "../components/work/work";
import Navbar from "../components/navbar/navbar";
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
            dest:'contact',
            name:'Contact'
        }
    ]
    return (
        <>
        <div className="homepage">
            <Navbar
            links={links}/>
     
            <Herobanner/>
            <About/>
         <ServiceOffering/>
         <Content
         hasTilt={true}
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

           <Testimonials/>

           <WorkCarousel/>

           <Footer
           links={links}/>

    
        </div>
        </>
    )

}

export default Homepage