import React from "react";
import Booking from "../components/booking/booking";
import TrainingForm from "../components/trainingForm/trainingForm";
import { Helmet } from "react-helmet";


const Contact = () => {

    return (
        <div className="contact-container">
            <Helmet>
                <title>Muhammad Bensalim Training Form</title>
                <meta name='Description' 
                content="This is where users can fill out
                 their previous training history and training
                  goals so that Muhammad Bensalim can give them the best training possible
                   so they can reach their fitness goals"
                />
                <meta name="keywords"
                 content="training, fitness, Muhammad Bensalim, workout, goals" />
                    <meta property="og:title" content="Muhammad Bensalim Training Form" />
<meta property="og:description" content="Fill out this training form to provide your training history and goals. Muhammad Bensalim will use this information to tailor the best training program for you." />
<meta property="og:image" content="https://muhammadbensalim.com/og-image.jpg" />
<meta property="og:url" content="https://muhammadbensalim.com/muhammad-bensalim-training-form" />


            </Helmet>

            
           <TrainingForm/>
        </div>
    )


}


export default Contact