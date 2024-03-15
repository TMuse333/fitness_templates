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
  <div key={index} className="exercise-display-list">
    {weekSelected && <h2 className="exercise-display-date">Date: {formatDate(workout.date)}</h2>}
    <div className="display-list">
      <ul>
        <li><strong>Exercise:</strong></li>
        {workout.exercises.map((exercise, exIndex) => (
         
        ))}
      </ul>
      {workout.exercises.map((exercise, exIndex) => (
        <div key={exIndex}>
          <span>{exercise.name}</span>
          <div>
            <ul>
              {exercise.sets.map((set, setIndex) => (
                <li key={setIndex}>{set.weight}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {exercise.sets.map((set, setIndex) => (
                <li key={setIndex}>{set.reps}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
))}


    </div>
  );
};

export default ExerciseDisplay;
