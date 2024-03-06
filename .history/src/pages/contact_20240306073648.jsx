import React from "react";
import Booking from "../components/booking/booking";
import TrainingForm from "../components/trainingForm/trainingForm";
import { Helmet } from "react-helmet";


const Contact = () => {

    return (
        <div className="contact-container">
            <Helmet>
                <title>Muhammad Bensalim Training Form</title>
                <meta name='Training Form' content="This is where users can fill out their previous training history and training goals so that Muhammad Bensalim can give them the best training possible so they can reach their fitness goals"
                </
            </Helmet>
           <TrainingForm/>
        </div>
    )


}


export default Contact