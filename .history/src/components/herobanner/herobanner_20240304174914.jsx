import React from "react";
import dunk from '../../media/best_dunk.mp4'


const Herobanner = () => {

    return (
        <div className="herobanner-container">
            <video autoPlay={true}
            mute={true}>
                <source src={dunk}
                </source>
            </video>
        </div>
    )
}