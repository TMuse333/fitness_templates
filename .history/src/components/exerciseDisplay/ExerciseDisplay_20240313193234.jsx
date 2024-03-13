import React from "react";
import './exerciseDisplay.css'

const ExerciseDisplay = ({ workoutData }) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      };
  return (
    <div className="exercise-display-container">

      


    </div>
  );
};

export default ExerciseDisplay;
