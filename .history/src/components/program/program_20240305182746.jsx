import React from "react";
import Herobanner2 from "../herobanner2/herobanner2";
import dunk from '../../media/best_dunk.mp4';
import Preview from "../preview/preview";
import HydroList from "../hydrolist/hydrolist";
import { designAdvantages2 } from "../../data/data";

const Program = () => {
    return (
        <div className="program-container">
<Herobanner2/>

<video autoPlay muted loop className='program-video'>
        <source src='' type="video/mp4" />
      </video>
      <Preview/>
      <HydroList
      text={designAdvantages2}
    absolute={true}
      />
        </div>

       
    )

}

export default Program