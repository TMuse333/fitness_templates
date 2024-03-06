import React from "react";
import Content from "../components/content/content";
import BigContent from "../components/bigContent/bigContent";
import Navbar from "../components/navbar/navbar";
import striker from '../media/q3-visuals-logo-2.png'

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
        <div className="about-container">
            
        </div>
        </>

    )
}