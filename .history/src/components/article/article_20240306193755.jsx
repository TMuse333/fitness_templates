import React from "react";
import Navbar from "../navbar/navbar";

const Article = () => {

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
     
        <div className="article-container">
            <div className="article-herobanner">

           
            <h1 >
                This is a fitness article
            </h1>

            <p>In this article I will show you why 
                hitting the gym is essential
            </p>



            </div>

        </div>
        </>
    )
}