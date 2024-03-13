import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './insertData.css';

const InsertData = ({ addWorkout }) => {
  const [workoutData, setWorkoutData] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState([{ weight: "", reps: "" }]);
  const [exercises, setExercises] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default date set to the current date

  const [directionText, setDirectionText] = useState('');
  const [workoutSubmitted, setWorkoutSubmitted] = useState(false);

  const handleAddSet = () => {
    // Check if the current input for weight or reps is empty
    if (sets.some(set => set.weight === "" || set.reps === "")) {
      // Show window alert if weight or reps is empty
      window.alert("Please enter the current weight and reps before adding another set.");
    } else {
      // If weight and reps are not empty, add a new set
      setSets([...sets, { weight: "", reps: "" }]);
    }
  };

  const handleExerciseNameChange = (e) => {
    setExerciseName(e.target.value);
  };

  const handleSetChange = (index, field, value) => {
    if (exerciseName === "") {
      alert("Please enter the name of the exercise first.");
      return;
    }
  
    const updatedSets = [...sets]; // Create a copy of the sets array
    updatedSets[index] = { ...updatedSets[index], [field]: value }; // Update the specified set
    setSets(updatedSets); // Update the state with the new sets array
  };
  
  const handleAddExercise = () => {
    if (exerciseName === "") {
      alert("Please enter the name of the exercise first.");
      return;
    }
  
    const newExercise = {
      name: exerciseName,
      sets: sets.filter((set) => set.weight !== "" && set.reps !== ""),
    };
  
    setExercises([...exercises, newExercise]); // Add the new exercise to the array
    setSets([{ weight: "", reps: "" }]); // Reset the sets array
    setExerciseName(""); // Reset the exercise name
  };
  
  const handleSaveWorkout = () => {
    // Validate the last exercise before adding it to the workout data
    if (exerciseName !== "" && sets.every(set => set.weight !== "" && set.reps !== "")) {
      const newWorkout = {
        date: selectedDate,
        exercises: [...exercises, {
          name: exerciseName,
          sets: sets.filter((set) => set.weight !== "" && set.reps !== ""),
        }]
      };
    
      setWorkoutData(prevWorkoutData => [...prevWorkoutData, newWorkout]);
    } else {
      alert("Please enter the name and all details for the last exercise before saving the workout.");
    }
    
    setWorkoutSubmitted(true); // Set workoutSubmitted to true when the workout is submitted
  };
  
  

  useEffect(() => {
    if (exerciseName === "") {
      setDirectionText("Please enter the exercise name.");
    } else if (sets.some(set => set.weight === "" || set.reps === "")) {
      setDirectionText("Please enter weight and reps for each set.");
    } else {
      setDirectionText("");
    }
  }, [exerciseName, sets]);

  useEffect(() => {
    console.log('the workout2:', workoutData);
  }, [workoutData]);

  const handleAddAnotherWorkout = () => {
    setWorkoutSubmitted(false);
    setExerciseName("");
    setSets([{ weight: "", reps: "" }]);
    setExercises([]);
    setSelectedDate(new Date());
  };


  return (
    <div className="insert-data-container">
      <h2>Add Workout</h2>
      {workoutSubmitted ? (
        // Render the submitted workout details if workoutSubmitted is true
        <div>
  <h3>Workout Submitted</h3>
  <p>Date: {selectedDate.toString()}</p>
  <ul>
    {exercises.map((exercise, index) => (
      <li key={index}>
        {exercise.name}:
        <ul>
          {exercise.sets.map((set, idx) => (
            <li key={idx}>Weight: {set.weight}, Reps: {set.reps}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
  <button className="tracker-button">
    Add another workout
  </button>
</div>
      ) : (
        // Render the input forms if workoutSubmitted is false
        <div className="exercise-form">
          <div className="date-name-container insert-data-form">
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              className='insert-data-datePicker'
            />
            <input
              type="text"
              placeholder="Exercise Name"
              value={exerciseName}
              onChange={handleExerciseNameChange}
              style={{ marginBottom: '1rem' }}
            />
          </div>
          {sets.map((set, index) => (
            <div className='insert-data-form' key={index}>
              <input
                type="text"
                placeholder="Weight"
                value={set.weight}
                onChange={(e) => handleSetChange(index, "weight", e.target.value)}
              />
              <input
                type="text"
                placeholder="Reps"
                value={set.reps}
                onChange={(e) => handleSetChange(index, "reps", e.target.value)}
              />
            </div>
          ))}
          <div className="insert-data-buttons" style={{ marginTop: '1.5rem' }}>
            <button className="tracker-button" onClick={handleAddSet}>Add Set</button>
            <button className="tracker-button" onClick={handleAddExercise}>Add Exercise</button>
            <button className="tracker-button" onClick={handleSaveWorkout}>Save Workout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsertData;
