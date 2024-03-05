import React from "react";
import Herobanner2 from "../herobanner2/herobanner2";



const Program = () => {
    return (
        <div className="program-container">
<Herobanner2/>

<video autoPlay muted loop className='herobanner-video'>
        <source src={dunk} type="video/mp4" />
      </video>
        </div>
    )

}

export default Program