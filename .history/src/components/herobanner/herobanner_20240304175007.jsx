import React from "react";
import dunk from '../../media/best_dunk.mp4'


const Herobanner = () => {

    return (
        <div className="herobanner-container">
            <video autoPlay={true}
            className='herobanner-video'
            mute={true}>
                <source src={dunk}
                />
            </video>
        </div>
    )
}

export default Herobanner