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

    const questions = [
        'What are your primary goals',
        'How old are you',
        'How many days a week can '
    ]

    return (
        <>
  <Navbar 
            links={links}
            />
        <div className="training-form-container">
          
            <div className="training-form-herobanner">


            <img src={striker}
            className='training-form-logo'/>
            <h1>Sign Up For Training</h1>
            <h2>Achieve Your Fitness Goals Today</h2>
            <h3>Fill in the form below so I can best help you.</h3>
                       </div>




        </div>
        </>
    )


}


export default TrainingForm