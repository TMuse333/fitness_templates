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
    setWorkouts(workoutData);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Perform any additional logic based on the selected date
  };

  
  // Find workouts for the selected date
  const filteredWorkouts = workouts.filter(
    (workout) => workout.date && workout.date.toDateString() === selectedDate?.toDateString()
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

      <div className="workout-boxes">
        {filteredWorkouts.length > 0 ? (
          filteredWorkouts.map((workout, index) => (
            <div key={index}
            
            >
              <strong>Date:</strong> {workout.date.toDateString()}
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
