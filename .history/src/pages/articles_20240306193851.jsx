import React from "react";
import Navbar from "../components/navbar/navbar";
import Article from "../components/article/article";

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
     <div className="articles-container">
        <Article/>
     </div>
        </>
    )
}


export default Articles