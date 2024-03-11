import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useWorkout } from "../../context/context";
import "./tracker.css";

const Tracker = () => {
  const {
    selectedDate,
    handleDateChange,
    handleWeekSelection,
    handleDateSelection,
    filteredWorkouts,
    calculateProgress,
    handleProgressSelection,
    weeklyProgressSelected
  } = useWorkout();

  return (
    <div className="tracker-container">
      <p>Select a date</p>
      <div className="tracker-buttons">
        <button onClick={handleDateSelection}>Date</button>
        <button onClick={handleWeekSelection}>Week</button>
        <button onClick={handleProgressSelection}>Progress</button>
      </div>

      <form className="tracker-form">
        <DatePicker
          placeholderText="Search for a date"
          selected={selectedDate}
          onChange={handleDateChange}
          className="date-picker"
        />
      </form>

      {filteredWorkouts.length > 0 &&   !weeklyProgressSelected ? (
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
      ) : (
        <p>No workout done on this day</p>
      )}

      {/* Render progress data */}
      {calculateProgress().length > 1000 &&(
        <div className="exercise-progress-container">
          <h2>Progress Data</h2>
          {calculateProgress().map((progress, progressIndex) => (
            <div key={progressIndex} className="progress-exercise">
              <strong>Exercise:</strong> {progress.name}
              {progress.progressSets.map((progressSet, setIndex) => (
                <div key={setIndex}>
                  <strong>From Workout {setIndex} to Workout {setIndex + 1}:</strong> 
                  Weight Diff: {progressSet.weightDiff}, Reps Diff: {progressSet.repsDiff}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tracker;
