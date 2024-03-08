import React from "react";
import Navbar from "../components/navbar/navbar";
import Article from "../components/article/article";
import Article2 from "../components/article2/article2";
import Footer from "../components/footer/footer";
import { HelmetProvider, Helmet } from "react-helmet-async";
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
        <HelmetProvider>
            <Helmet>
               <title>Muhammad Bensalim article 1</title> 
               <meta name='description'
               content='This is a fitness related article that Muhammad Bensalim create 
               to explain why being a real one is important
               '/>
            </Helmet>
        </HelmetProvider>
        <Navbar links={links}
        />
     <div className="articles-container">
        {/* <Article/> */}
        <Article2/>
        <Footer links={links}
        />
     </div>
        </>
    )
}


export default Articles