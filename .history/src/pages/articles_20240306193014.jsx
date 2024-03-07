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
            These are articles
        </div>
        </>
    )
}


export default Articles