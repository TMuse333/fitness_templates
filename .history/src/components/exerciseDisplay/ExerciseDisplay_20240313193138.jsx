import React from "react";
import './exerciseDisplay.css'

const ExerciseDisplay = ({ workoutData }) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      };
  return (
    <div className="exercise-display-container">
      <h3>Workout Date: {formatDate(workoutData.date)}</h3>
      {/* {workoutData.map((workout, workoutIndex) => (
  <div key={workoutIndex}
  className='insert-data-workout-summary'>
    <h3>Workout Date: {formatDate(workout.date)}</h3>
    <ul>
      {workout.exercises.map((exercise, index) => (
        <li key={index}>
          {exercise.name}:
          <ul>
            {exercise.sets.map((set, idx) => (
              <li key={idx}>Weight: {set.weight}, Reps: {set.reps}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
))} */}
    </div>
  );
};

export default ExerciseDisplay;
