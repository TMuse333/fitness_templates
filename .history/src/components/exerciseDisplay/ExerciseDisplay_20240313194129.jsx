import React from "react";

const ExerciseDisplay = ({ workoutData }) => {
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
              <span>{exercise.name}</span>
              <div className="display-">
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
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExerciseDisplay;
