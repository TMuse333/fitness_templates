import React from "react";
import Navbar from "../navbar/navbar";
import striker from '../../media/quantum-striker-pose.png'

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
        <div className="training-form-container">
            <Navbar 
            links={links}
            />
            <img src={striker}
            className='trainingForm-logo'/>
            This is the training form
        </div>
    )


}


export default TrainingForm