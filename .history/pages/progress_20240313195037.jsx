import React, {useEffect}from "react";
import Navbar from "../src/components/navbar/navbar";
import Login from "../src/components/login/Login";
import Footer from "../src/components/footer/footer";
import Tracker from "../src/components/tracker/tracker";
import { useWorkout } from "../src/context/context";
import InsertData from "../src/components/insertData/insertData";
import { workoutData } from "../src/data/data";
import ExerciseDisplay from "../src/components/exerciseDisplay/ExerciseDisplay";


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

    const {loggedIn,setLoggedIn,viewData,insertData} =
    useWorkout()

    useEffect(() => {
        // Reset loggedIn to false when the component mounts
        setLoggedIn(false);
      }, []); // Empty dependency array ensures this effect runs only once



    return (
    <>
<Navbar links={links}
/>
<div className="progress-container"
style={{
    display:'flex',
    justifyContent:'center'
}}>


       {/* <Login/> */}



       <ExerciseDisplay
       workoutData={workoutData}
       />



   {/* {viewData ? (
    <Tracker/>
   ) : insertData ? (
   <InsertData/>
   ) : <Login/>} */}



      

       </div>
 
        </>

    )
}


export default Progress