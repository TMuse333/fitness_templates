import React from "react";
import Navbar from "../navbar/navbar";
import './article.css'
import striker from '../../media/quantum-striker-pose.png'
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

     
        <div className="article-container">
        <Navbar
        links={links}
        />
            <div className="article-herobanner">

           
            <h2 >
                This is a fitness article
            </h2>

            <p>In this article I will show you why 
                hitting the gym is essential!
            </p>

            <img src={striker}
           alt='article-picture'
           />
            </div>

            <section className="article-section">
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo neque libero ipsum beatae iusto consequuntur consequatur placeat voluptatum corrupti totam!</h2>
            </section>

        </div>
        </>
    )
}


export default Article