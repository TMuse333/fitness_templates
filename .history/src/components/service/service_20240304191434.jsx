import React from "react";
import { motion } from "framer-motion";

const Service = () => {

    const animations = (index) => {

        const even = x % 2 === 0
       
        return {
            initial:{
                x:even ? -20 : 20,
                opacity:0
            } ,
            opac
        }
    }

    return (
        <div className="service-container">
            <h2>Training Service</h2>
            <ul className="service-list">
                <li>Training details</li>
                <li>Training details</li>
                <li>Training details</li>
                <li>Training details</li>
            </ul>
        </div>
    )

}

export default Service