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
  {`
    {
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Muhammad Bensalim",
      "url": "https://www.yourwebsite.com",
      "sameAs": [
        "https://www.facebook.com/MuhammadBensalim",
        "https://www.instagram.com/MuhammadBensalim",
        // Add other social media profiles
      ],
      "jobTitle": "Elite Powerlifter and Online Trainer",
      "description": "Muhammad Bensalim is an elite powerlifter from Nova Scotia, offering online training services.",
      "image": "https://www.yourwebsite.com/path/to/muhammad-bensalim.jpg",
      "telephone": "+1-555-555-5555",
      "email": "contact@muhammadbensalim.com",
      "address": {
       
        "addressLocality": "Your City",
        "addressRegion": "Your Province/State",
       
        "addressCountry": "Your Country"
      }
    }
  `}
</script>

                    
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