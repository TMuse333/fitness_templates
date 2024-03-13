import React from "react";
import './exerciseDisplay.css'

const ExerciseDisplay = ({ workoutData }) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      };
  return (
    <>
  <h3>Workout Date: {formatDate(workoutData.date)}</h3>
    <div className="exercise-display-container">
        <div className="exercise-display-box"
        >
<span>
    Exercise
</span>
<span>
    Weight
</span>
<span>
    Reps
</span>

        </div>

      


    </div>
    </>
  );
};

export default ExerciseDisplay;
