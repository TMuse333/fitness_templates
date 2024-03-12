import React from "react";
import Navbar from "../src/components/navbar/navbar";
import Login from "../src/components/login/Login";
import Footer from "../src/components/footer/footer";
import Tracker from "../src/components/tracker/tracker";



const Progress = () => {

    const links = [
        {
            dest:'/',
            name:'Home'
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
        {
            dest:'/articles',
            name:"Articles"
        },
      
    ]

    const {loggedIn} =
    



    return (
    <>
<Navbar links={links}
/>
<div className="progress-container">


       {/* <Login/> */}

       <Tracker/>

       </div>
 
        </>

    )
}


export default Progress