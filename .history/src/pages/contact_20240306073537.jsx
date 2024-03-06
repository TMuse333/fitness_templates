import React from "react";
import Booking from "../components/booking/booking";
import TrainingForm from "../components/trainingForm/trainingForm";
import { Helmet } from "react-helmet";


const Contact = () => {

    return (
        <div className="contact-container">
            <Helmet>
                <title>Muhammad Bensalim Training Form</title>
                <meta name='Training Form' content="This is where users can fill out their"
            </Helmet>
           <TrainingForm/>
        </div>
    )


}


export default Contact