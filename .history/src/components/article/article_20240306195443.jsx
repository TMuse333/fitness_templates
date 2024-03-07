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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo ducimus libero minus nulla quia ex, aliquam rem, est magni fuga voluptatem commodi vel, ipsum qui sed neque reprehenderit? Quaerat laudantium expedita mollitia blanditiis ut laboriosam veniam provident modi similique! Maiores soluta eum doloribus quasi laudantium, quidem blanditiis enim assumenda nulla dolores eius aliquam, eaque necessitatibus veniam iste. Dignissimos, animi?</p>
            </section>

        </div>
        </>
    )
}


export default Article