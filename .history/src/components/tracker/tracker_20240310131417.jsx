import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { workoutData } from "../../data/data";
import './tracker.css';

const Tracker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const [weekSelected, setWeekSelected] = useState(false)
  const [dateSelected, setDateSelected] = useState(false)


  useEffect(() => {
    // Fetch your workout data here
    // For now, using the provided workoutData as an example
    setWorkouts(workoutData);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Perform any additional logic based on the selected date
  };

  const handleWeekSelection = () => {
        setWeekSelected(true)
        setDateSelected(false)
  }

  const handleDateSelection = () => {
    setDateSelected(true)
    setWeekSelected(false)
  }


  // Find workouts for the selected date
  const filteredWorkouts = workouts.filter(
    (workout) => workout.date && workout.date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <div className="tracker-container">
        <p>Select a date</p>
        <div className="tracker-buttons">
        <button
        onClick={handleDateSelection}>Date</button>
        <button> Week</button>
            </div>
       
      <form className="tracker-form">
        <DatePicker
          placeholderText="Search for a date"
          selected={selectedDate}
          onChange={handleDateChange}
          className='date-picker'
        />
      </form>

      <div className="workout-boxes">
        {filteredWorkouts.length > 0 ? (
          filteredWorkouts.map((workout, index) => (
            <div key={index}
            
            >
                <div
                className="exercise-date">
                    
              <strong >Date:</strong> {workout.date.toDateString()}
              </div>
              {workout.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex}
                className='exercise-box'>
                  <strong>Exercise:</strong> {exercise.name}
                  {exercise.sets.map((set, setIndex) => (
                    <div key={setIndex}>
                      <strong>Set {setIndex + 1}:</strong> Weight: {set.weight}, Reps: {set.reps}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No workout done on this day</p>
        )}
      </div>
    </div>
  );
};

export default Tracker;
