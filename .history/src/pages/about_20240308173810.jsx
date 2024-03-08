import React from "react";
import Content from "../components/content/content";
import BigContent from "../components/bigContent/bigContent";
import Navbar from "../components/navbar/navbar";
import q3 from '../media/q3-visuals-logo-2.png'
import striker from '../media/quantum-striker-pose.png'

import { HelmetProvider,Helmet } from "react-helmet-async";


const About = () => {

    const links = [
        {
            dest:'/',
            name:'Home'
        },
        {
            dest:'/programs',
            name:'Programs'
        },
        {
            dest:'/contact',
            name:'Contact'
        }
    ]

    return (
        <>
        
        <Navbar
        links={links}
        />
        <div className="personal-container">
        <HelmetProvider>
                <Helmet>
                  <title>About Muhammad Bensalim</title>  
                  <meta name='description'
                  content='This is a personal page about Muhammad Bensalim
                  a personal trainer, he does powerlifing and fitness and is committed
                  to being the best personal trainer he can be'
                  />
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
       
        "addressLocality": "Halifax",
        "addressRegion": "Nova Scotia",
       
        "addressCountry": "Canada"
      }
    }
  `}
</script>
                </Helmet>
                </HelmetProvider>
        

            <Content

            image={q3}
            />
            <Content
                        hasTilt={true}
                        hasAnimation={true}
            image={striker}
            rev={true}
            />

         

            <BigContent
            image={striker}
            reverse={true}
            />

<BigContent
            image={q3}
            />
            
        </div>

        </>

    )
}

export default About