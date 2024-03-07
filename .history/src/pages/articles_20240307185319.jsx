import React from "react";
import Navbar from "../components/navbar/navbar";
import Article from "../components/article/article";
import Article2 from "../components/article2/article2";

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
        <Navbar links={links}
        />
     <div className="articles-container">
        {/* <Article/> */}
        <Article2/>
     </div>
        </>
    )
}


export default Articles