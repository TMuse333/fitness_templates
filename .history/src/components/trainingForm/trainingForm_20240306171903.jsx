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

    const benefits = [
        'weekly checkups',
        'Inspiration',
        'periodical training',
        
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
                    <div className="training-form-herobanner-text">

                    
                    <h1>Sign Up For Training</h1>
                    <h2>Achieve Your Fitness Goals Today</h2>
                    </div>
                  
                </div>
                <h3>Fill in the form below so I can best help you.</h3>

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
                   <h1>Muhammad Bensalim</h1>
                   <h2>Fantastic Training</h2>
                   <h3>You'll gain access to</h3>
                   <ul className="training-form-access-list">
                    
                   </ul>
                </div>
                {/* <Footer links={links}
            /> */}
            </div>
        
        </>
    );
}

export default TrainingForm;
