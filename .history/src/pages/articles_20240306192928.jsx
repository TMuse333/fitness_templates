import React from "react";
import Navbar from "../components/navbar/navbar";


const Articles = () => {


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