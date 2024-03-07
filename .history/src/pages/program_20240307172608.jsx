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
                        <Helmet>
                <title>Muhammad Bensalim Training</title>
                <meta name="Training Overview" content="This page is an overview of Muhammad Bensalims training services,
                it describes his philosophies can methods for acheive the best fitness results possible. It also answers common
                training questions like what equipment and mentality is needed ect." />
              
            </Helmet>

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

<ProductCarousel/>

<Closer/>

<Footer
           links={links}/>
          
        </div>

       
    )

}

export default Program