import React from "react";
import Herobanner2 from "../components/herobanner2/herobanner2";
import dunk from '../media/best_dunk.mp4';
import Preview from "../components/preview/preview";
import HydroList from "../components/hydrolist/hydrolist";
import { designAdvantages2 } from "../data/data";
import Navbar3 from "../components/navbar3/navbar3";
import Footer from "../components/footer/footer";
import Footer2 from "../components/footer2/footer2";
import Navbar from "../components/navbar/navbar";
import Closer from "../components/closer/closer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProductCarousel from "../components/optionDisplay/optionDisplay";

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