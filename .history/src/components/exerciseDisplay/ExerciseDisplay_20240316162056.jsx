import React, { useState } from "react";
import { useWorkout } from "../../context/context";
import "./exerciseDisplay.css";

const ExerciseDisplay = ({ workoutData }) => {
  const { weekSelected } = useWorkout();

  const [isHovered, setIsHovered] = useState(null);

  const [hoveredWorkout, setHoveredWorkout] = useState(null)

  const [clickedWorkout, setClickedWorkout] = useState([])

  const [clickedExercise, setClickedExercise] = useState([])

  const handleItemClick = (exerciseIndex, workoutIndex) => {
    const isAlreadyClicked = clickedExercise.includes(exerciseIndex);
  
    if (isAlreadyClicked) {
      setClickedExercise(clickedExercise.filter((index) => index !== exerciseIndex));
    } else {
      setClickedExercise([...clickedExercise, exerciseIndex]);
    }

    const isAlreadyClicked2 = clickedWorkout.includes(workoutIndex);

    if (isAlreadyClicked2) {
      setClickedWorkout(clickedWorkout.filter((index) => index !== workoutIndex));
    } else {
      setClickedWorkout([...clickedWorkout, workoutIndex]);
    }
  };
  

  const style = (index, workoutIndex) => {
    const selected = index === isHovered
     && hoveredWorkout === workoutIndex;

    return {
      transform: selected ? "scale(1.2)" : "scale(1)",
      backgroundColor: selected ? "#0080ff" : "transparent",
      transition: "all 0.3s ease",
    };
  };

  const handleMouseEnter = (index,workoutIndex) => {
    setIsHovered(index);
    setHoveredWorkout(workoutIndex)
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
    setHoveredWorkout(null)
  };




  

  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  const exerciseStyle = (sets) => {
    const selected = clickedExercise.includes(index)

    const heightPerSet = 50
    const totalHeight = heightPerSet * sets

    return {
      // height: selected ? ''
    }
  }

  return (
    <div className="exercise-display-container">
      {workoutData.map((workout, workoutIndex) => (
        <div key={workoutIndex} className="exercise-display-workout">
          {weekSelected && (
            <h2 className="exercise-display-date">
              Date: {formatDate(workout.date)}
            </h2>
          )}
          <ul className="exercise-display-list"
          >
            <li>
              <strong>Exercise</strong>
            </li>
            {workout.exercises.map((exercise, exerciseIndex) => (
              <React.Fragment key={exerciseIndex}>
                <li
                  className="exercise-data"
                  style={style(exerciseIndex,workoutIndex)}
                  onMouseEnter={() => handleMouseEnter(exerciseIndex,workoutIndex)}
                  onMouseLeave={handleMouseLeave}
                  onClick={()=>handleItemClick(exerciseIndex,workoutIndex)}
                 
                >
                  {exercise.name}
                </li>
                
                  <div className="exercise-set-details">
                   
                    <ul style={exerciseStyle(exercise.sets.length)}
                    >
                    <strong>Sets:</strong>
                      {exercise.sets.map((set, setIndex) => (
                        <li key={setIndex}>
                          Weight: {set.weight}, Reps: {set.reps}
                        </li>
                      ))}
                    </ul>
                  </div>
                
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExerciseDisplay;
