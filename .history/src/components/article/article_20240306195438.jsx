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
        <Navbar
        links={links}
        />
     
        <div className="article-container">
            <div className="article-herobanner">

           
            <h2 >
                This is a fitness article
            </h2>

            <p>In this article I will show you why 
                hitting the gym is essential!
            </p>

         
            </div>
            <img src={striker}
            className='article-image'
           alt='article-picture'
           />

            <section className="article-section">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nesciunt minus, consectetur ipsa quibusdam iusto quod neque. Similique, accusamus facere.</p>
            </section>

        </div>
        </>
    )
}


export default Article