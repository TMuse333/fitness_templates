import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { workoutData } from "../../data/data";
import './tracker.css';
import { useWorkout } from "../../context/context";

const Tracker = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [workouts, setWorkouts] = useState([]);
//   const [selectedWeek, setSelectedWeek] = useState(null);



  const {
    workouts,
    setWorkouts,
    selectedDate,
    selectedWeek,
    handleDateChange,
    handleWeekSelection,
  } = useWorkout();

  useEffect(() => {
    // Fetch your workout data here
    // For now, using the provided workoutData as an example
    setWorkouts(workoutData);
  }, []);





  const handleDateSelection = () => {
    setDateSelected(true);
    setWeekSelected(false);
  };

  const getWeekNumber = (date) => {
    // Calculate the ISO week number
    const currentDate = new Date(date);
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setDate(currentDate.getDate() + 4 - (currentDate.getDay() || 7));
    const yearStart = new Date(currentDate.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((currentDate - yearStart) / 86400000 + 1) / 7);

    return weekNumber;
  };

  // Filter workouts based on the selected date or week
  const filteredWorkouts = workouts.filter((workout) => {
    if (dateSelected) {
      return workout.date && workout.date.toDateString() === selectedDate?.toDateString();
    } else if (weekSelected) {
      return getWeekNumber(workout.date) === selectedWeek;
    }
    return false;
  });

  return (
    <div className="tracker-container">
      <p>Select a date or week</p>
      <div className="tracker-buttons">
        <button onClick={handleDateSelection}>Date</button>
        <button onClick={handleWeekSelection}>Week</button>
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
