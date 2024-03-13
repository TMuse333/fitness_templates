import React, { useState, useEff } from "react";
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

  const handleAddSet = () => {
    setSets([...sets, { weight: "", reps: "" }]);
  };

  const handleExerciseNameChange = (e) => {
    setExerciseName(e.target.value);
  };

  const handleSetChange = (index, field, value) => {
    const updatedSets = [...sets];
    updatedSets[index][field] = value;
    setSets(updatedSets);
  };

  const handleAddExercise = () => {
    const newExercise = {
      name: exerciseName,
      sets: sets.filter((set) => set.weight !== "" && set.reps !== ""),
    };
    setExercises([...exercises, newExercise]);
    setSets([{ weight: "", reps: "" }]);
    setExerciseName("");

  };

  const handleSaveWorkout = () => {
    const newWorkout = { date: selectedDate, exercises };
    setWorkoutData(prevWorkoutData => [...prevWorkoutData, newWorkout]);
    console.log('the workout:', workoutData);
    setExercises([]);
  };


  const updateDirectionText = () => {
    if (exerciseName === "") {
      setDirectionText("Please enter the exercise name.");
    } else if (sets.some(set => set.weight === "" || set.reps === "")) {
      setDirectionText("Please enter weight and reps for each set.");
    } else {
      setDirectionText("");
    }
  };


  return (
    <div className="insert-data-container">
      <h2>Add Workout</h2>
      <p>{directionText}</p>
      <div className="exercise-form">
        <div className="date-name-container insert-data-form"
        >

 
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
        className='insert-data-datePicker'
          // You can customize the appearance of the date picker as needed
        />
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={handleExerciseNameChange}
          
          style={{
            marginBottom:'1rem'
          }}
        />
               </div>
        {sets.map((set, index) => (
          <div  className='insert-data-form'
          key={index}>
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
        <div className="insert-data-buttons"
          style={{
            marginTop: '1.5rem'
          }}>


          <button className="tracker-button"
            onClick={handleAddSet}>Add Set</button>
          <button className="tracker-button"
            onClick={handleAddExercise}>Add Exercise</button>
          <button className="tracker-button"
            onClick={handleSaveWorkout}>Save Workout</button>
        </div>
      </div>
    </div>
  );
};

export default InsertData;
