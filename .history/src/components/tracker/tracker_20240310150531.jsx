import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { workoutData } from "../../data/data";
import './tracker.css';
import { useWorkout } from "../../context/context";

const Tracker = () => {

    const {
       filteredWorkouts,
       handleDateSelection,
       handleWeekSelection,
        handleDateChange,
        selectedDate,
        handleProgressSelection,
        weeklyProgressSelected
    } = useWorkout()
  return (
    <div className="tracker-container">
      <p>Select a date or week</p>
      <div className="tracker-buttons">
        <button onClick={handleDateSelection}>Date</button>
        <button onClick={handleWeekSelection}>Week</button>
        <button onClick={}
      </div>

      <form className="tracker-form">
        <DatePicker
          placeholderText="Search for a date"
          selected={selectedDate}
          onChange={handleDateChange}
          className='date-picker'
        />
      </form>

      {filteredWorkouts.length > 0 ? (
        <div className="workout-boxes">
          {filteredWorkouts.map((workout, index) => (
            <div key={index} className="exercise-box">
              <div className="exercise-date">
                <strong>Date:</strong> {workout.date.toDateString()}
              </div>
              {workout.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex}
                className='exercise-sets'>
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
        <p>No workout done on this day or week</p>
      )}
    </div>
  );
};

export default Tracker;
