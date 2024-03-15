import React,{useState} from "react";
import { useWorkout } from "../../context/context";
import './exerciseDisplay.css'

const ExerciseDisplay = ({ workoutData }) => {


const {weekSelected} = useWorkout()

const [isHovered, setIsHovered] = useState(false)

const s

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
        <li><strong>Exercise</strong></li>
        {workout.exercises.map((exercise,index) => (
          <li key={index}>{exercise.name}</li>
        ))}
        </ul>
   
  </div>
))}


    </div>
  );
};

export default ExerciseDisplay;
