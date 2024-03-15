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
      <div className="exercise-display-box">
        
      </div>
      {workoutData.map((workout, index) => (
  <div key={index} className="exercise-display-list">
    {weekSelected && <h2 className="exercise-display-date">Date: {formatDate(workout.date)}</h2>}
    {workout.exercises.map((exercise, exIndex) => (
      <React.Fragment key={exIndex}>
        <div className="display-list">
          <h2></h2>
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
      </React.Fragment>
    ))}
  </div>
))}

    </div>
  );
};

export default ExerciseDisplay;
