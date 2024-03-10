import React from "react";
import Navbar from "../src/components/navbar/navbar";




const Progress = () => {

    const links = [
        {
            dest:'programs',
            name:'Programs'
        },
        {
            dest:'about',
            name:'About'
        },
        {
            dest:'contact',
            name:'Contact'
        },
        {
            dest:'articles',
            name:"Articles"
        },
      
    ]

    return (<>

        <div className="progress-container">
            track your progress here
        </div>
        </>

    )
}


export default Progress