import React from "react";
import Navbar from "../navbar/navbar";
import striker from '../../media/quantum-striker-pose.png'
import './trainingForm.css'
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
            <div className="training-form-herobanner">


            <img src={striker}
            className='training-form-logo'/>
            <h1>Sign Up For Training</h1>
            <h2>Achieve Your Fitness Goals Today</h2>
                       </div>
        </div>
    )


}


export default TrainingForm