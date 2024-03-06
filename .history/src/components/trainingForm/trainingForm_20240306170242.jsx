import React from "react";
import Navbar from "../navbar/navbar";
import striker from '../../media/quantum-striker-pose.png'
import Footer from "../footer/footer";
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
        'How many days a week can you train',
        'How long can you train per day',
        'Any preferences on training style',
        'Any injury history?'
    ]

    return (
        <>
            <Navbar links={links} />
            <div className="training-form-container">
                <div className="form">

    
                <div className="training-form-herobanner">
                    <img src={striker} className='training-form-logo' alt="Training Form Logo" />
                    <h1>Sign Up For Training</h1>
                    <h2>Achieve Your Fitness Goals Today</h2>
                    <h3>Fill in the form below so I can best help you.</h3>
                </div>

                <form className="training-form">
                    {questions.map((question, index) => (
                        <div key={index} className="form-group">
                           
                            <input
                                type="text"
                                id={`question${index + 1}`}
                                name={`question${index + 1}`}
                                placeholder={`${question}?`}
                            />
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>

                </div>
                <div className="training-form-access">
                    slat
                </div>
                {/* <Footer links={links}
            /> */}
            </div>
        
        </>
    );
}

export default TrainingForm;
