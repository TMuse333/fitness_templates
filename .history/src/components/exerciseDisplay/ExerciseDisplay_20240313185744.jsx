import React from "react";
import './exerciseDisplay.css'

const ExerciseDisplay = ({ workout }) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      };
  return (
    <div className="exercise-display-container">
      <h3>Workout Date: {formatDate(workout.date)}</h3>
      {workout.exercises.map((exercise, index) => (
        <div key={index} className="exercise-display">
          <div>{exercise.name}</div>
          <div>
            <ul>
              {exercise.sets.map((set, idx) => (
                <li key={idx}>Weight: {set.weight}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {exercise.sets.map((set, idx) => (
                <li key={idx}>Reps: {set.reps}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseDisplay;
