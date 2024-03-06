import React from "react";
import Content from "../components/content/content";
import BigContent from "../components/bigContent/bigContent";
import Navbar from "../components/navbar/navbar";
import q3 from '../media/q3-visuals-logo-2.png'
import striker from '../media/quantum-striker-pose.png'

const About = () => {

    const links = [
        {
            dest:'/',
            name:'Home'
        },
        {
            dest:'programs',
            name:'Programs'
        },
        {
            dest:'contact',
            name:'Contact'
        }
    ]

    return (
        <>
        <Navbar
        links={links}
        />
        <div className="personal-container">

            <Content
            image={q3}
            />
            <Content
            image={striker}
            rev={true}
            />

         

            <BigContent
            image={striker}
            reverse={true}
            />

<BigContent
            image={q3}
            />
            
        </div>
        </>

    )
}

export default About