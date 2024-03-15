import React from "react";
import { useWorkout } from "../../context/context";
import './exerciseDisplay.css'

const ExerciseDisplay = ({ workoutData }) => {


const {weekSelected} = useWorkout

  return (
    <div className="exercise-display-container">
      <div className="exercise-display-box">
        <span>Exercise</span>
        <span>Weight</span>
        <span>Reps</span>
      </div>
      {workoutData.map((workout, index) => (
        <div key={index} className="exercise-display-list">
          {workout.exercises.map((exercise, exIndex) => (
            <React.Fragment key={exIndex}
            >
<div className="display-list">
              <span>{exercise.name}</span>
              <div >
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
