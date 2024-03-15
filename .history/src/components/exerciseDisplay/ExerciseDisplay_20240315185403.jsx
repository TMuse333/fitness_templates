import React from "react";
import { useWorkout } from "../../context/context";
import './exerciseDisplay.css'

const ExerciseDisplay = ({ workoutData }) => {


const {weekSelected} = useWorkout()

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

  return (
    <div className="exercise-display-container">
  
  {workoutData.map((workout, index) => (
  <div key={index} className="exercise-display-workout">
    {weekSelected && <h2 className="exercise-display-date">Date: {formatDate(workout.date)}</h2>}
    
      <ul className="exercise-display-list">
        <li><strong>Exercise:</strong></li>
        {workout.}
        </ul>
   
  </div>
))}


    </div>
  );
};

export default ExerciseDisplay;
