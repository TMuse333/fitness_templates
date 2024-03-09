import React from "react";
import Navbar from "../src/components/navbar/navbar";
import Article from "../src/components/article/article";
import Article2 from "../src/components/article2/article2";
import Footer from "../src/components/footer/footer";
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
                                   <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Your Open Graph Title" />
  <meta property="og:description" content="Description for social media sharing" />
  <meta property="og:image" content="/path/to/og-image.jpg" />
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