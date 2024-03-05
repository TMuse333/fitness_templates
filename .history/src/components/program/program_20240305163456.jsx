import React from "react";
import Herobanner2 from "../herobanner2/herobanner2";
import dunk from '../../media/best_dunk.mp4';


const Program = () => {
    return (
        <div className="program-container">
<Herobanner2/>

<video autoPlay muted loop className='program-video'>
        <source src='' type="video/mp4" />
      </video>
        </div>
    )

}

export default Program