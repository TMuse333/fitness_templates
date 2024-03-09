import React from "react";
import Herobanner2 from "../src/components/herobanner2/herobanner2";

import Preview from "../src/components/preview/preview";
import HydroList from "../src/components/hydrolist/hydrolist";
import { designAdvantages2 } from "../src/data/data";

import Footer from "../src/components/footer/footer";
import Footer2 from "../src/components/footer2/footer2";
import Navbar from "../src/components/navbar/navbar";
import Closer from "../src/components/closer/closer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProductCarousel from "../src/components/optionDisplay/optionDisplay";

const Program = () => {

    const links = [
        {
            dest:'/',
            name:'Home'
        },
        {
            dest:'/about',
            name:'About'
        },
        {
            dest:'/contact',
            name:'Contact'
        }
    ]


    return (
        <div className="program-container">
            <HelmetProvider>


                        <Helmet>
                <title>Muhammad Bensalim Training</title>
                <meta name="Training Overview" content="This page is an overview of Muhammad Bensalims training services,
                it describes his philosophies can methods for acheive the best fitness results possible. It also answers common
                training questions like what equipment and mentality is needed ect." />

<script type="application/ld+json">
    {
      `{
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Muhammad Bensalim Training Programs",
        "description": "Explore Muhammad Bensalim's powerlifting training programs. Learn about his philosophies, methods, and achieve the best fitness results. Find answers to common questions about equipment and mentality.",
        "url": "https://www.yourwebsite.com/muhammad-bensalim-training-programs",
        "mainEntityOfPage": {
          "@type": "CreativeWork",
          "name": "Muhammad Bensalim Training Programs",
          "description": "Powerlifting training programs designed by Muhammad Bensalim for optimal fitness results."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Muhammad Bensalim Training",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.yourwebsite.com/logo.png",
            "width": 600,
            "height": 60
          }
        }
    }`
      }
    </script>
              
            </Helmet>
            </HelmetProvider>

            <Navbar
            links={links}/>
<Herobanner2/>

<video autoPlay muted loop className='program-video'>
        <source src='' type="video/mp4" />
      </video>
      <Preview/>

<div className="questions-list">

<h1>Questions</h1>


      <HydroList
      text={designAdvantages2}
    absolute={true}
      />

</div>

<h1>Awesome features</h1>

<ProductCarousel/>

<Closer/>

<Footer
           links={links}/>
          
        </div>

       
    )

}

export default Program