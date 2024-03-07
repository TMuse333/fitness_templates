import React from "react";
import Navbar from "../components/navbar/navbar";


const Articles = () => {

    const links = [
        {
            dest:'/',
            name:"Home"
        },
        {
            dest:'/programs',
            name:'Programs'
        },
        {
            dest:'/about',
            name:'About'
        },
        {
            dest:'/contact',
            name:'Contact'
        },
   
    ]

    return (
        <>
       <Navbar
       links={links}
       />
        <div className="articles-container">
            <h1>
                This is a fitness article
            </h1>
        </div>
        </>
    )
}


export default Articles