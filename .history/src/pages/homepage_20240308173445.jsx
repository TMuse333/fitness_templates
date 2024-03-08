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
import ProductCarousel from "../components/optionDisplay/optionDisplay";
import { HelmetProvider,Helmet } from "react-helmet-async";
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
        },
        {
            dest:'articles',
            name:"Articles"
        }
    ]
    return (
        <>
        <div className="homepage">
            <HelmetProvider>
                <Helmet>
                    <title>Muhammad Bensalim Training</title>
                    <meta 
                    name='description'
                    content='This is the main page of Muhammad Bensalim
                    training, this is a fitness page where Muhammad Bensalim
                    offers online training. He is an elite powerlifter
                    from nova scotia'
                    />
                     <meta name="keywords"
                    content="training, fitness, Muhammad Bensalim, workout, goals" />
                                                   <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Your Open Graph Title" />
                    <meta property="og:description" content="Description for social media sharing" />
                    <meta property="og:image" content="/path/to/og-image.jpg" />
                    <script type="application/ld+json">
                </Helmet>
            </HelmetProvider>
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
           <div style={{
            marginTop:'10rem'
           }}>
            <h1>
                Your products here
            </h1>



           <ProductCarousel/>
           </div>

           <Footer
           links={links}/>

    
        </div>
        </>
    )

}

export default Homepage