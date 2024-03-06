import React from "react";
import Herobanner2 from "../herobanner2/herobanner2";
import dunk from '../../media/best_dunk.mp4';
import Preview from "../preview/preview";
import HydroList from "../hydrolist/hydrolist";
import { designAdvantages2 } from "../../data/data";
import Navbar3 from "../navbar3/navbar3";
import Footer from "../footer/footer";
import Footer2 from "../footer2/footer2";


const Program = () => {

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
        <div className="program-container">
            <Navbar3/>
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

{/* <Footer
           links={links}/> */}
           <Footer2/>
        </div>

       
    )

}

export default Program