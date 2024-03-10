import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { workoutData } from "../../data/data";
import './tracker.css';

const Tracker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch your workout data here
    // For now, using the provided workoutData as an example
    setWorkouts([workoutData]);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Perform any additional logic based on the selected date
  };

  // Filter workouts based on the selected date
  const filteredWorkouts = workouts.filter(
    (workout) => workout.date.getTime() === selectedDate?.getTime()
  );

  return (
    <div className="tracker-container">
      <form>
        <DatePicker
          placeholderText="Search for a date"
          selected={selectedDate}
          onChange={handleDateChange}
        />
      </form>

    

      {filteredWorkouts.length > 0 ? (
  // Render workout plans for the selected date
  filteredWorkouts.map((workout, index) => (
    <div key={index}>
      <strong>Date:</strong> {workout.date ? workout.date.toDateString() : 'No workout done this day'}
      {workout.exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex}
        >
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
  // Display a message when no workouts are found
  <p>No workout done on this day</p>
)}
    </div>
  );
};

export default Tracker;
