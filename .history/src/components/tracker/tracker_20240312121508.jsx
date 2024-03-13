import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useWorkout } from "../../context/context";
import "./tracker.css";
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa";

const Tracker = () => {
  const {
    selectedDate,
    handleDateChange,
    handleWeekSelection,
    handleDateSelection,
    filteredWorkouts,
    calculateProgress,
    handleProgressSelection,
    weeklyProgressSelected,
    progressData,
    dateSelected,
    weekSelected
  } = useWorkout();

  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(0);



  const progressDataLength = progressData.length;

  const nextExercise = () => {
    // Increment the index, and loop back to 0 if at the end
    setSelectedExerciseIndex((prevIndex) => (prevIndex + 1) % progressDataLength);
  };

  const prevExercise = () => {
    // Decrement the index, and loop to the end if at the beginning
    setSelectedExerciseIndex((prevIndex) => (prevIndex - 1 + progressDataLength) % progressDataLength);
  };

  const trackerText = !dateSelected && !weekSelected &&
  !weeklyProgressSelected ? 'Select a date, week or progress of a week' :
  dateSelected ? 'Select which day you want to view' : 
  weekSelected ? 'Select the week you want to view' :
  weeklyProgressSelected ? 'Select the week of progress you want to view'

  return (
    <div className="tracker-container">
      <p>Select a date, week or progress of a week</p>
      <div className="tracker-buttons">
        <button onClick={handleDateSelection}>Date</button>
        <button onClick={handleWeekSelection}>Week</button>
        <button onClick={handleProgressSelection}>Progress</button>
      </div>

      {dateSelected || weeklyProgressSelected || weekSelected && (
    <form className="tracker-form">
    <DatePicker
      placeholderText="Search for a date"
      selected={selectedDate}
      onChange={handleDateChange}
      className="date-picker"
    />
  </form>
      )}

  

      {filteredWorkouts.length > 0 &&   !weeklyProgressSelected  ?(
        <div className="workout-boxes">
          {/* Render workout plans for the selected date or week */}
          {filteredWorkouts.map((workout, index) => (
            <div key={index} className="exercise-date">
              <strong>Date:</strong> {workout.date.toDateString()}
              {workout.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className="exercise-box">
                  <strong>Exercise:</strong> {exercise.name}
                  {exercise.sets.map((set, setIndex) => (
                    <div key={setIndex}>
                      <strong>Set {setIndex + 1}:</strong> Weight: {set.weight}, Reps: {set.reps}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : dateSelected ? (
        <p>No workout done on this day</p>
      ) : null}

      {/* Render progress data */}

      {weeklyProgressSelected && (
      <div className="weekly-progress-container">

        <div className="progress-nav">
            
        <button className="progress-button"
        onClick={prevExercise} disabled={progressDataLength <= 1 || selectedExerciseIndex === 0}>
          <FaArrowLeft/>
        </button>

        <h2>Weekly Progress</h2>

        <button className="progress-button"
        onClick={nextExercise} disabled={progressDataLength <= 1 || selectedExerciseIndex === progressDataLength - 1}>
          <FaArrowRight/>
        </button>
            </div>
       

        {progressData.map((exercise, index) => (
          // Only display the selected exercise
          (index === selectedExerciseIndex && (
            <div key={exercise.name} className="exercise-progress">
              <h3>{exercise.name}</h3>

              {exercise.workouts.map((workout) => (
                <div key={workout.date} className="workout-progress">
                  <p>Date: {workout.date.toLocaleDateString()}</p>

                  {workout.sets.map((set, setIndex) => (
                    <div key={setIndex}>
                      Set {setIndex + 1}: {set.weight}lbs for {set.reps}
                    </div>
                  ))}

                  <p>Total weight: {workout.totalWeight}lbs</p>
                </div>
              ))}
            </div>
          ))
        ))}


  
      </div>
    )}

      
    </div>
  );
};

export default Tracker;