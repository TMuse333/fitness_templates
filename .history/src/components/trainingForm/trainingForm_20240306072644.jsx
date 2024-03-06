import React from "react";
import Navbar from "../navbar/navbar";

const TrainingForm = () => {

    const links = [
        {
            dest:'/',
            name:'home'
        },
        {
            dest:'/programs',
            name:'Programs'
        },
        {
            dest:'/about',
            name:'About'
        }
    ]

    return (
        <div className="trainingForm-container">
            This is the training form
        </div>
    )


}


export default TrainingForm